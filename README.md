# mybin
Run the npm bin of the self project with a simple cli

# compatibility
- Unix compatible system
- Only execute node yet

# Install
```sh
npm install --save-dev sepalang/mybin 
```

# Usage
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
