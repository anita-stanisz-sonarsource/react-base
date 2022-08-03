# React App Basic

## Installation

```
npm i --save-dev webpack webpack-cli webpack-dev-server
npm i --save-dev typescript tslint ts-loader
npm i --save-dev babel-loader @babel/preset-env @babel/core 
    @babel/plugin-transform-runtime 
    @babel/preset-react 
    @babel/preset-typescript
    @babel/runtime
    @babel/cli

npm i react react-dom
npm i --save-dev @types/react @types/react-dom

```
Process: 

* Create public folder, inside create index.html
* [Create tslint.json](tslint.json)
* [Create tsconfig.json](tsconfig.json)
* Create index.tsx
* Create app.tsx
* [Create webpack.config.js](webpack.config.js)
* [Create .babelrc](.babelrc)
* [Add sourcemaps](webpack.config.js#L12)
* [Setup lazy loading](src/axios/index.tsx)
* [Setup Service calls](src/axios/demo.tsx)

To be added:
* Setup service mocking
* Setup testing
* Setup test mocking
* Setup forms
* Setup styling or material ui
* Setup redux
* Setup context

## Additional packages

Click on the links below to view additional information about these packages
* [axios](src/axios/README.md)
* [formik & yup](src/formik/README.md)
* [Matieral UI](src/material-ui/README.md)

To be added:
* ~~moment~~
* ~~date-fns~~
* ~~firebase~~
* ~~graphql~~
* ~~lodash~~
* ~~pusher-js~~
* ~~notistack~~
* ~~yup~~
* ~~recharts~~
* ~~keycloak~~
* ~~ck-editor~~