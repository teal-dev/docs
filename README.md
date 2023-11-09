# Mintlify Starter Kit

Click on `Use this template` to copy the Mintlify starter kit. The starter kit contains examples including

- Guide pages
- Navigation
- Customizations
- API Reference pages
- Use of popular components

### Generate new api reference from openapi.json

Export the openapi.json file from the teal api and add it to the repo.

Run the scrape-openapi to generate the api refence changes

```
npm run scrape-openapi
```

This modifies the openapi.json file to be compatible with Mintlify. In addition, it generates any changes to
files under `api-reference`. In addition, the script prints a new navigation object. This object could be
used to replace the existing value in main.json.


### 👩‍💻 Development

Install the [Mintlify CLI](https://www.npmjs.com/package/mintlify) to preview the documentation changes locally. To install, use the following command

```
npm i -g mintlify
```

Run the following command at the root of your documentation (where mint.json is)

```
mintlify dev
```

### 😎 Publishing Changes

Changes will be deployed to production automatically after pushing to the default branch.

You can also preview changes using PRs, which generates a preview link of the docs.

#### Troubleshooting

- Mintlify dev isn't running - Run `mintlify install` it'll re-install dependencies.
- Page loads as a 404 - Make sure you are running in a folder with `mint.json`
