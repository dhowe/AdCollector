urls = [];
module.exports = {
    "Url test": function(browser) {
        browser
            .url("https://www.google.com")
            .waitForElementVisible('body', 5000)
            .elements('tag name', 'a', function(res) {
                res.value.forEach(function(element, i) {
                    browser.elementIdAttribute(i, 'href', function(result) {
                       
                       var url = result.value;
                       
                       if (url != null && url.indexOf("http") === 0){
                        
                        urls.push(url);
                        console.log(urls.length, url);
                      }
                     
                    });

                });

            });
      
    }
};
