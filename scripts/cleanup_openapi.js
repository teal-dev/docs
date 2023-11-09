#! /usr/bin/env node
const fs = require('fs');
const openapi_schema = require("../openapi.json");


// Clean up server urls byt removing trailing /
for (const server of openapi_schema.servers) {
    server.url = server.url.replace(/\/$/,"");
};

// Clean up types in nested schemas
for (const [parent_schema, schema] of Object.entries(openapi_schema.components.schemas)) {
    if (!("properties" in schema)) continue;
 
    for (const [property_name, property] of Object.entries(schema.properties)) {
        if ("anyOf" in property && property.anyOf[0].items?.$ref.endsWith(parent_schema)) {
            delete property.anyOf[0].items;
        }
    };
};

// Override openapi.json file with changes
fs.writeFileSync("openapi.json", JSON.stringify(openapi_schema));


