const fs = require("fs");
const path = require("path");
const deepl = require("deepl-node");
const { resolve } = require("path");
const { readdir } = require("fs").promises;

const authKey = process.env.DEEPL_AUTH_KEY;
const translator = new deepl.Translator(authKey);

const TARGET_LANGUAGES = ["it"];
const SOURCE_LANGUAGE = "en";
const DEEPL_LANGUAGE_MAPPING = {
  en: "en-US",
  es: "es",
  pt: "pt-BR",
  it: "it",
  fr: "fr",
};

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

  const translation = await translate({
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
