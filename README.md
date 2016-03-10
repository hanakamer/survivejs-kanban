### webpack-react-boilerplate

###Usage

```
npm install
npm start
```

__webpack-dev-server__ with  __Hot Module Replacement__ (HMR) configuration.

__HTML5 history api__ gives the ability to modify a website's URL without a full page refresh.  

__sourcemaps enabled__ but you will aslo need to enable source maps in your browser for better debuggability.

[link for chrome](https://developer.chrome.com/devtools/docs/javascript-debugging#source-maps)

__npm-install-webpack-plugin__ saves you from typing `npm install...` every time.
this plugin detects the missing packages as you require them in your file, and automatically installs and saves them in package.json

### babel cofiguration contains :

* __babel-plugin-array-includes__
```
Replaces arr.includes(val) with arr.indexOf(val) >= 0.
```

* __babel-plugin-syntax-class-properties__, allows parsing of class properties.
  
* __babel-plugin-syntax-decorators__,  allows parsing of decorators.
  
* __babel-plugin-syntax-object-rest-spread__, allows parsing of object rest/spread. 
```
const {a, b, ...props} = this.props
```
* __babel-plugin-transform-class-properties__
  
* __babel-plugin-transform-decorators-legacy__, to replicate the old decorator behavior from Babel 5
  
* __babel-plugin-transform-object-assign__, to teplace Object.assign with an inline helper.
 
* __babel-plugin-transform-object-rest-spread__, to compile object rest and spread to ES5
  
### Linter
Extends from [airbnb](https://www.npmjs.com/package/eslint-config-airbnb) configuration.

### Resources
[survivejs](http://survivejs.com/)
