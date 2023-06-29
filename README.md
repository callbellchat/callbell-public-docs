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

1. Create a file in bash in this path `src/snippets/curl` according to the api changes you made;
2. Run the following command in the terminal:

```
$ node src/scripts/generate_code_snippets.mjs
```

After that, you will see that other files were created in the folders for each language.
