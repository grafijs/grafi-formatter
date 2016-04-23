;(function(){

import 'formatter'

  var grafi = {}
  grafi.formatter = formatter
  grafi.checkColorDepth = checkColorDepth

  if (typeof module === 'object' && module.exports) {
    module.exports = grafi
  } else {
    this.grafi = grafi
  }
}())
