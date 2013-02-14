(function(define) {
define([], function() {
  'use strict';

  var Nyan = function() {};

  Nyan.prototype.nyan = function(additional) {
    return 'nyan' + (additional == null ? '' : additional);
  };

  return Nyan;
});
})(
  typeof define !== 'undefined' ? define :
    typeof module !== 'undefined' ? function(deps, factory) { module.exports = factory(); } :
    function(deps, factory) { this['Nyan'] = factory(); }
);
