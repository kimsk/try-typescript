import * as sqlite3 from 'sqlite3';
import * as fs from 'fs';
import * as Promise from 'bluebird';

let parse = Promise.promisify<any, string, any>(require('csv-parse'));
let readFileAsync = Promise.promisify<string, string, string>(fs.readFile);
let db = new sqlite3.Database('test.db');

readFileAsync(__dirname + '/../fs_read.csv', 'utf-8')
  .then((value) => {
    return parse(value, { delimiter: ',' });
  })
  .then((data) => {
    return {
      cols: data[0],
      records: data.slice(1)
    }
  })
  .then((data) => {
    console.log(data.cols);
    console.log(data.records);
    db.run("INSERT INTO memos VALUES('TEST', 5000)");

    db.each("SELECT * FROM memos", (err, row) => {
      console.log(row.text);
    });
  })
  .then(() => {
    console.log('close db..')
    db.close();
  });


console.log('running...');