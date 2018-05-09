# myself
- Run the npm bin of the self project with a simple cli
- Can check the information about package setting and execution.

## compatibility
- Unix compatible system
- Only execute node yet

## Install
```sh
npm install --save-dev @sepalang/myself 
```

## Usage

### package run script
In package.json

> bin/myargv.js
```js
#!/usr/bin/env node
console.log(`🎙️  This is your argv ${ JSON.stringify(process.argv) }`)
```

> package.json
```json
{
  "bin":{
    "argv":"bin/myargv.js"
  },
  "scripts":{
    "test":"my argv Hello world!"
  }
}
```

> In shell
```diff
+ npm run test
🚀 Execute mybin : myargv Hello world
🎙️  This is your argv ["/Users/user/.nvm/versions/node/v8.9.4/bin/node","/Users/user/mybin/bin/myargv.js","Hello","world"]
```

### information about package
```js
const myself = require('myself')
console.log(myself)
/*
{
  "argv": [
    "/Users/naver/.nvm/versions/node/v8.9.4/bin/node",
    "/Users/naver/git/mybin/bin/mypkg.js",
    "Hello",
    "world"
  ],
  "argv2": [
    "Hello",
    "world"
  ],
  "args": {
    "_": [
      "Hello",
      "world"
    ]
  },
  "name": "myself",
  "directory": "mybin",
  "deployPath": "/Users/user/git",
  "path": "/Users/user/git/mybin",
  "package": {
    "name": "myself",
    "version": "0.2.0",
  ...
*/

```
