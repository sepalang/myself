# mybin
Run the npm bin of the self project with a simple cli

# compatibility
- Unix compatible system
- Only execute node yet

# Install
```sh
npm i sepalang/mybin
```

# Usage
In package.json

> bin/myargv.js
```js
#!/usr/bin/env node
console.log(`🎙️  This is your arvs ${ JSON.stringify(process.argv) }`)
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
🎙️  This is your arvs ["/Users/naver/.nvm/versions/node/v8.9.4/bin/node","/Users/naver/git/mybin/bin/myargv.js","Hello","world"]
```