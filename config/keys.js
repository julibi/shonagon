// module.exports = {
//   mongoURI: 'mongodb://shonagon:masterthesisyay@ds255258.mlab.com:55258/shonagon',
//   'mongodb://shonagon-prod:1q2w3e@ds255258.mlab.com:55258/shonagon-prod'
// };

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./prod');
} else {
  module.exports = require('./dev');
}
