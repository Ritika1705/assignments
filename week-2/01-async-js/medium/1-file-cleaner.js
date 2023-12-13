var fs = require('fs')
fs.readFile('./file.txt', 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
  var result = data.replace(/\s+/g, ' ').trim();

  fs.writeFile('./file.txt', result, 'utf8', function (err) {
     if (err) return console.log(err);
  });
});