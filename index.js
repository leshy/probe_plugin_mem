// Generated by CoffeeScript 1.8.0
(function() {
  var backbone, fs, helpers, procfile, _;

  helpers = require('helpers');

  _ = require('underscore');

  fs = require('fs');

  procfile = require('procfile');

  backbone = require('backbone4000');

  exports.plugin = backbone.Model.extend4000({
    interval: 1000,
    run: function(callback) {
      var data, interestingData;
      data = procfile.parse(fs.readFileSync('/proc/meminfo').toString());
      interestingData = ['MemTotal', 'MemFree', 'MemAvailiable', 'Buffers', 'Cached', 'SwapCached'];
      data = _.pick(data, interestingData);
      data = helpers.dictMap(data, function(val) {
        return val.command;
      });
      return helpers.cbc(callback, null, data);
    }
  });

}).call(this);
