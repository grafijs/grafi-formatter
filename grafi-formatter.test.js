var assert = require('assert')
var grafi = require('./grafi-formatter')

// setup
var length = 400
var width = 10
var height = 10
var imageData = grafi.formatter(new Uint8ClampedArray(length), width, height)

// check what is returned from formatter
assert(imageData.width === width,
  'imageData.width is same as requested width')
assert(imageData.height === height,
  'imageData.height is same as requested height')
assert(imageData.data.length === length,
  'imageData.data is same length as requested pixel data')
assert(imageData.data instanceof Uint8ClampedArray,
  'datatype of imageData.data is Uint8ClampedArray')

// try intentionally cause Error
try {
  grafi.formatter(new Uint8ClampedArray(length - 1), width, height)
} catch (e) {
  assert(e.message === 'data and size of the image does now match',
    'it should throw Error if length of pixel data does not match with available pixels')
}

try {
  grafi.formatter(new Array(length), width, height)
} catch (e) {
  assert(e.message === 'pixel data passed is not an Uint8ClampedArray',
    'it should throw Error if non-Uint8ClampedArray is passed as pixel data')
}
