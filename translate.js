const fs = require("fs");
const path = require("path");
const deepl = require("deepl-node");
const { resolve } = require("path");
const { readdir } = require("fs").promises;
const OpenAI = require("openai");

// const authKey = process.env.DEEPL_AUTH_KEY;
// const translator = new deepl.Translator(authKey);

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEYs,
});

const SYSTEM_MESSAGE = `
You are a helpful AI translator. Given a text, which is always in english, you should use the first line to detect the target language and
return the translated text without the first line. If you encounter "import" statement do not translate the text contained within those markers. Keep the markdown formatting intact.
Keep the values in the frontmatter intact (the part between the two --- markers).

For example, if the input is:

pt-BR
---
title: Hello world!
sidebar_position: 1
---

import assignTeamUrl from './assets/assign_team.png'

Hello world!

You should return:

---
title: Olá mundo!
sidebar_position: 1
---

import assignTeamUrl from './assets/assign_team.png'


Olá mundo!
`;

const TARGET_LANGUAGES = ["fr"];
const SOURCE_LANGUAGE = "en";
const DEEPL_LANGUAGE_MAPPING = {
  en: "en-US",
  es: "es",
  pt: "pt-BR",
  it: "it",
  fr: "fr",
};

async function openAITranslate({ text, sourceLanguage, targetLanguage }) {
  let translation = "";

  const completion = await openai.chat.completions.create({
    messages: [
      { role: "system", content: SYSTEM_MESSAGE },
      {
        role: "user",
        content: `${DEEPL_LANGUAGE_MAPPING[targetLanguage]}\n${text}`,
      },
    ],
    model: "gpt-3.5-turbo",
    maxTokens: 4000,
  });

  return completion.choices[0].message.content;
}

async function* getFiles(dir) {
  const dirents = await readdir(dir, { withFileTypes: true });
  for (const dirent of dirents) {
    const res = resolve(dir, dirent.name);
    if (dirent.isDirectory()) {
      yield* getFiles(res);
    } else {
      if (res.endsWith(".md")) {
        yield res;
      }
    }
  }
}

async function translate({ text, sourceLanguage, targetLanguage }) {
  const result = await translator.translateText(
    text,
    sourceLanguage,
    DEEPL_LANGUAGE_MAPPING[targetLanguage]
  );

  return result.text;
}

async function readFile(filePath) {
  return await fs.promises.readFile(filePath, { encoding: "utf8" });
}

async function writeFile({ text, filePath }) {
  return await fs.promises.writeFile(filePath, text, { encoding: "utf8" });
}

async function generateFileTranslation({
  sourcePath,
  sourceLanguage,
  targetLanguage,
}) {
  const targetPath = sourcePath.replace(
    "/docs",
    `/i18n/${targetLanguage}/docusaurus-plugin-content-docs/current`
  );

  const text = await readFile(sourcePath);

  const translation = await openAITranslate({
    text,
    sourceLanguage,
    targetLanguage,
  });

  await writeFile({ text: translation, filePath: targetPath });
}

(async () => {
  for await (const f of getFiles("./docs")) {
    for (let target of TARGET_LANGUAGES) {
      console.log(`processing ${target}: ${f}...`);

      await generateFileTranslation({
        sourcePath: f,
        sourceLanguage: SOURCE_LANGUAGE,
        targetLanguage: target,
      });

      console.log("...done!");
    }
  }
})();
