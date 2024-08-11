#!/usr/bin/env node

const args = process.argv.slice(2);

if (args.length === 0) {
    console.error('No arguments provided!');
    process.exit(1);
}

const username = args[0];
const uri = `https://api.github.com/users/${username}/events`;
fetch(uri)
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status} Message: ${response.statusText}`);
        }
        return response.json();
    })
    .then(data => {
        console.log(data);
        for (const item of data) {
            console.info(item);
            console.info('---------------')
        }
    })
    .catch(error => {
        console.error(`Error: ${error.message}`);
    });