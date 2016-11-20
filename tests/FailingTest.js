module.exports = {

  StuckTest: function(client) {
  	  //this pass after a long time
  	  client.url('http://www.cbsnews.com')
          .waitForElementVisible('html', 3000)
          .verify.visible('body');
      //this fail
      client.url('http://www.cbsnews.com')
          .pause(3000)
          .verify.visible('body');

      client.url('http://www.aol.com')
          .waitForElementVisible('html', 3000)
          .verify.visible('body');

  }

};

