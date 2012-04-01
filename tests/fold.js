(function() {
  var $, foldl, foldr, pun, sum;
  pun = require('../lib/pun.js').pun;
  $ = pun.$;
  foldl = function(f, b) {
    return pun.match([], function() {
      return b;
    }, $, function(xs) {
      return foldl(f, f(b, xs[0]))(xs.slice(1));
    });
  };
  foldr = function(f, b) {
    return pun.match([], function() {
      return b;
    }, $, function(xs) {
      return f(xs[0], (foldr(f, b))(xs.slice(1)));
    });
  };
  sum = function(a, b) {
    return a + b;
  };
  console.log(foldl(sum, 0)([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
  console.log(foldr(sum, 0)([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
  /*>>
  55
  55
  <<*/
}).call(this);
