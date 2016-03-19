import Request from 'request';
import Promise from 'bluebird';
const Base64 = require('js-base64').Base64;

module.exports = function (org, space, action, key, body, blocking = true){
  const url = `https://openwhisk.ng.bluemix.net/api/v1/namespaces/${org}_${space}/actions/${action}?blocking=${blocking}`;
  const encodedKey = Base64.encode(key);

  const config = {
    url,
    method: 'post',
    json: true,
    body,
    headers: {'Authorization': 'Basic ' + encodedKey}
  };

  return new Promise((resolve, reject) => {
    Request(config, (err, response, body) => {
      if(err){
        reject({err, response});
      }else{
        resolve(body);
      }
    });
  });
};
