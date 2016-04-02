import * as _ from 'lodash';

import * as sqlite3 from 'sqlite3';

import * as fs from 'fs';
var parse = require('csv-parse');

var parser = parse({delimiter: ';'}, function(err, data){
  console.log(data);
});

fs.createReadStream(__dirname+'/../fs_read.csv').pipe(parser);

var db = new sqlite3.Database('test.db');

db.run("INSERT INTO memos VALUES('TEST', 5000)");

db.each("SELECT * FROM memos", (err, row) => {
  console.log(row.text);
});

db.close();

let arr: number[] = [1, 2, 3];

_.forEach(arr, (v) => console.log(v));

console.log('running...');