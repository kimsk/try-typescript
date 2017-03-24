const fs = require('fs')
const path = require('path')

const missingFile = path.join(__dirname, '/package.json')
const goodJson = path.join(__dirname, '../package.json')
const badJson = path.join(__dirname, '../README.md')

function loadJSON(fileName: string){
    fs.readFile(fileName, 'utf8', (err, data)  => {
        if (err) return console.log(err)
        try {
          var parsed = JSON.parse(data)
        }
        catch (err){
          return console.log(err)
        }
        return console.log(parsed)
    })
}

loadJSON(missingFile)
loadJSON(goodJson)
loadJSON(badJson)

// Promise style
// reject(err)
// resolve(result)
function readFileAsync(fileName: string):Promise<string>{
  return new Promise((resolve, reject) => {
    fs.readFile(fileName, 'utf8', (err, data) => {
      if (err) reject(err)
      else resolve(data)
    })
  })
}

function loadJSONPromise(fileName: string){
  readFileAsync(fileName)
    .then(data => JSON.parse(data))
    .then(json => console.log(json))
    .catch(err => console.log(err))
}

loadJSONPromise(missingFile)
loadJSONPromise(goodJson)
loadJSONPromise(badJson)