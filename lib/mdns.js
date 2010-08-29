
var MDNSService = require('./mdns_service').MDNSService;

exports.capi = require('./binding');

exports.Advertisement = require('./advertisement').Advertisement;
exports.createAdvertisement = function(regtype, port, options, callback) {
  return new exports.Advertisement(regtype, port, options, callback);
}

exports.Browser = require('./browser').Browser;
exports.createBrowser = function(regtype, options) {
  return new exports.Browser(regtype, options);
}
