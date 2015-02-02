helpers = require 'helpers'
_ = require 'underscore'
fs = require 'fs'
procfile = require 'procfile'
backbone = require 'backbone4000'

exports.plugin = backbone.Model.extend4000
    interval: 1000
    run: (callback) -> 
        data = procfile.parse fs.readFileSync('/proc/meminfo').toString()
 
        interestingData = [ 'MemTotal', 'MemFree', 'MemAvailiable', 'Buffers', 'Cached', 'SwapCached' ]
        data = _.pick data, interestingData
        data = helpers.dictMap data, (val) -> val.command
        
        
        
        helpers.cbc callback, null,  data

