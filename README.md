# React wiht TypeScript
- [React](https://github.com/facebook/react)
- [TypeScript](https://github.com/Microsoft/TypeScript)
- [Parcel](https://github.com/parcel-bundler/parcel)
- [Jest](https://github.com/facebook/jest)
- [react-testing-library](https://github.com/kentcdodds/react-testing-library)
- [Visual Studio Code](https://github.com/Microsoft/vscode)

## Installation

### Parcel
```
$ npm install --save-dev  parcel-bundler
```

### React
```
$ npm install --save react react-dom @types/react @types/react-dom
```

### Jest
```
$ npm install --save-dev jest @types/jest ts-jest
```

### Jest Config
```
// jest.config.js
module.exports = {
  "roots": [
    "<rootDir>/src"
  ],
  "transform": {
    "^.+\\.tsx?$": "ts-jest"
  },
  "testRegex": "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",
  "moduleFileExtensions": [
    "ts",
    "tsx",
    "js",
    "jsx",
    "json",
    "node"
  ],
}
```

### TypeScript Config
```
// tsconfig.json
{
  "compilerOptions": {
    "jsx": "react"
  }
}
```

### React Test Library
```
$ npm install --save-dev react-testing-library
```

## Debug with Visual Studio Code
```
// .vscode/launch.json
{
  "version": "0.2.0",
  "configurations": [
    {
      "type": "node",
      "request": "launch",
      "name": "Launch Node",
      "program": "${workspaceFolder}/node_modules/.bin/parcel",
      "args": [
        "./src/index.html"
      ]
    },
    {
      "type": "chrome",
      "request": "launch",
      "name": "Launch Chrome",
      "url": "http://localhost:1234",
      "webRoot": "${workspaceFolder}",
      "breakOnLoad": true,
      "sourceMapPathOverrides":{
        "../*": "${webRoot}/*",
      }
    }
  ],
  "compounds": [
    {
      "name": "Debug App",
      "configurations": [
        "Launch Node",
        "Launch Chrome",
      ]
    }
  ]
}
```
