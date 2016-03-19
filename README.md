# openwhisk
![OpenWhisk](images/master.png)

[![NPM](https://nodei.co/npm/openwhisk.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/openwhisk/)

[![npm](https://badge.fury.io/js/openwhisk.svg)](https://www.npmjs.com/package/openwhisk)
[![GitHub](https://img.shields.io/badge/github-code-blue.svg)](https://github.com/chyld/openwhisk)
[![Bluemix](https://img.shields.io/badge/bluemix-docs-orange.svg)](https://new-console.ng.bluemix.net/docs/openwhisk/index.html)


## Description
Easily call OpenWhisk REST microservies.


## Install
```sh
$ npm install openwhisk --save
```


## Usage
```js
var OpenWhisk = require('openwhisk');

// blocking mode
OpenWhisk('org_name', 'space_name', 'action_name', 'key', payload)
.then(function(){
  console.log('The results of the invocation are now available.');
});

// non-blocking
OpenWhisk('org_name', 'space_name', 'action_name', 'key', payload, false)
.then(function(){
  console.log('The activation id is now available.');
});
```


## License
MIT © [Chyld Medford](https://github.com/chyld)
