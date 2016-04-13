if needed:

`npm install -g typescript typings`

enable typescript:

`npm link typescript`

`tsc --init`

install mocha and chai:

`npm install mocha chai ts-node --save-dev`

install typings for mocha and chai:

`typings install mocha chai --ambient --save`

run:

`mocha tests.ts --require ts-node/register *.ts`