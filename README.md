<p align="center"><img src="https://dash.callbell.eu/packs/media/images/logo-v2-64c057488b549be3f34e6e4460d288b5.svg" width="200" height="auto" /></p>

# Public API docs

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

In order to run it, you will need to have Node.js version 16.14 or above.

### Installation

```
$ yarn
```

### Local Development

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Using SSH:

```
$ USE_SSH=true yarn deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.

### How to generate code snippets

![Screenshot 2023-06-29 at 14 36 57](https://github.com/callbellchat/callbell-public-docs/assets/39624192/cec0b018-ee64-487d-a3e7-773d67f70978)

1. Create a file in bash in this path `src/snippets/curl` according to the api changes you made;
2. Run the following command in the terminal:

```
$ node src/scripts/generate_code_snippets.mjs
```

After that, you will see that other files were created in the folders for each language.

### How to translate the docs

We have a script that allows you to translate the docs in other languages. To do this, you need to follow these steps:

1. Add your OPEN_AI_API_KEY in the file `src/scripts/translate.mjs`;
2. Run the following command in the terminal:

```node
node translate.js <your_file> 'it,pt,es,fr'
```

This sould do the job. If you have any issues, please contact the team.

> [!NOTE]
> The translation is not perfect, so you need to check the translation and make sure that everything is correct.

> [!CAUTION]
> The translations preview won't be available in the local development server, so you push the changes to the repository and check the preview build on Netlify.
