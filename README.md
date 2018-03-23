# mybin
Run the npm bin of the self project with a simple cli

# It is still incomplete.

# Install
```sh
npm i sepalang/mybin
```

# Usage
In package.json

> bin/mynode.js
```js
#!/usr/bin/env node
console.log(process.argv[2]);
```

```json
{
  "bin":{
    "mynode":"bin/mynode.js"
  },
  "scripts":{
    "test:mynode":"mybin mynode 'Hello world!'"
  }
}
```

```diff
- npm run test:mynode
+ Hello world!
```

