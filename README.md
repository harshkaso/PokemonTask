# PokemonTask
Completed the task in both conditions (local dataset and remote dataset)

## Files
function.js   : Contains all the functions given as task

main.js       : Contains code to execute functions by accessing dataset remotely (i.e directly from the given link)

driver.js     : Contains code to execute functions using the local dataset (i.e dataset.json)

dataset.json  : Contains copy of dataset in json format

Task          : Contains Angular Application

## Requirements
NodeJS

### External NPM Modules (Installation)
Request: To make request to access dataset remotely off of the link (only required to run main.js)
```bash
npm i request
```

## Usage
```bash
node driver.js
```
OR
```bash
node main.js
```

Angular Application
navigate to the Task Folder and run
```bash
npm start
```
OR
```bash
ng serve
```
