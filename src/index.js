'use strict';

var Request = require('request');
var Base64 = require('js-base64').Base64;

module.exports = function (org, space, action, key, data, cb) {
  var url = 'https://openwhisk.ng.bluemix.net/api/v1/namespaces/' + org + '_' + space + '/actions/' + action + '?blocking=true';
  var auth = Base64.encode(key);
  var o = {
    url: url,
    method: 'post',
    json: true,
    body: data,
    headers: {
      'Authorization': 'Basic ' + auth
    }
  };
  Request(o, cb);
};
