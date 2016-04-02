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
