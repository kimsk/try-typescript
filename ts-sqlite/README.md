### [Typings](https://github.com/typings/typings)
`typings install node --ambient --save`

`typings install sqlite3 --ambient --save`

### [Sqlite3](https://github.com/mapbox/node-sqlite3)
`npm install sqlite3 --build-from-source --save`


    import * as sqlite3 from 'sqlite3';
    var db = new sqlite3.Database('test.db');

    db.run("INSERT INTO memos VALUES('TEST', 5000)");

    db.each("SELECT * FROM memos", (err, row) => {
      console.log(row.text);
    });

    db.close();


### [CSV](https://github.com/wdavidw/node-csv)
`npm install csv --save`

    import * as fs from 'fs';
    var parse = require('csv-parse');
    var parser = parse({delimiter: ';'}, function(err, data){
      console.log(data);
    });

    fs.createReadStream(__dirname+'/../fs_read.csv')
        .pipe(parser);


### [Bluebird](http://bluebirdjs.com/docs/getting-started.html)

`npm install bluebird --save`

`typins install bluebird --ambient --save`

    let parse = Promise.promisify<any, string, any>(require('csv-parse'));
    let readFileAsync = Promise.promisify<string, string, string>(fs.readFile);

    readFileAsync(__dirname + '/../fs_read.csv', 'utf-8')
      .then((value) => {
        return parse(value, { delimiter: ',' });
      })
      .then((data) => {
        return {
          cols: data[0],
          records: data.slice(1)
        }
      });