var urls = require('./urls.js').urls;

module.exports = {
  AdCollector: function (client) {
    console.log('          Urls: '+start+'-'+end +' of '+ urls.length);
    client.url('http://rednoise.org/adntest/simple.html')
      .pause(5000)
      .end();
  }
};
