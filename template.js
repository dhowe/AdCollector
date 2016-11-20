var urls = require('./generalList.js').urls;
var keyword = ["finance", "credit card", "business", "loan", "morgage"];

module.exports = {
    AdCollector: function(client) {

        //STEP 0:Log in 
        client.url("http://www.google.com")
            .waitForElementVisible('#gb_70', 2000)
            .click("#gb_70")
            .pause(1000)
            .setValue('input[type=email]', 'adnauseambusinesscollector@gmail.com')
            .click("#next")
            .pause(1000)
            .setValue('input[type=password]', 'adnauseamAdCollector')
            .click("#signIn")
            .pause(3000)

        //STEP 1: Search in Google with related keywords 
        keyword.forEach(function(keyword) {
            client
                .url("https://www.google.com.hk/?#safe=strict&q=" + keyword)
                .waitForElementVisible('.srg', 5000)
                .pause(1000);
        });
        //STEP 2: Go through normal pages
        console.log('          Urls: ' + start + '-' + end + ' of ' + urls.length);
        urls.slice(start, ++end).forEach(function(url) {
            client.url(url)
                .pause(1000)
                .verify.visible('body');

        });
        //STEP 3: Export JSON file to download
        client.url('http://rednoise.org/ad-auto-export')
            .pause(5000)
            .assert.visible('body')
    }
};