# mybin
Run the npm bin of the self project with a simple cli

# It is still incomplete.

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
console.log(process.argv[2]);
```

```json
{
  "bin":{
    "mybintest":"bin/myargv.js"
  },
  "scripts":{
    "test":"mybin mybintest Hello world!"
  }
}
```

```diff
- npm run test
+ ["Hello", "world!"]
```

