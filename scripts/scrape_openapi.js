#! /usr/bin/env node
const fs = require('fs');
const openapi_schema = require("../openapi.json");

const groups = {};
const navigationTree = []

for (const [uri, subPaths] of Object.entries(openapi_schema.paths)) {
    for (const [method, pathObj] of Object.entries(subPaths)) {
        const title = pathObj.summary;
        const openapi = `${method.toUpperCase()} ${uri}`;
        const description = pathObj.description? pathObj.description.replaceAll("\n", " ") : pathObj.summary;
        const fileName = title.toLowerCase().replaceAll(" ", "-");
        const folder = pathObj.tags[0].toLowerCase().replaceAll(" ", "-");
        const text = `---\ntitle: "${title}"\nopenapi: "${openapi}"\ndescription: "${description}"\n---`;
        const page = `api-reference/${folder}/${fileName}`;
        
        const group = pathObj.tags[0]
        if (!(group in groups)) groups[group] = [];
        groups[group].push(page)
        
        fs.writeFileSync(`${page}.mdx`, text);
    }
}

for (const [group, pages] of Object.entries(groups)) {
    navigationTree.push({group, pages})
}
console.log("Navigation object suggestion:")
console.log(JSON.stringify(navigationTree, null, 2));