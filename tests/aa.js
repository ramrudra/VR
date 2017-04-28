var config = require('./config.json');
console.log('URL:', config.url);

var phantomcss = require('phantomcss');

casper.test.begin('Tags', function(test) {

  phantomcss.init({
    rebase: casper.cli.get('rebase')
  });

  // open page
  casper.start();

  casper.thenOpen(config.url, function() {
    console.log("URL open");
  });
 
});



