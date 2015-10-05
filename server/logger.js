var winston = require('winston');

var logger = new winston.Logger({
  transports: [
    new winston.transports.Console({
      level: 'debug',
      handleExceptions: true,
      prettyPrint: true,
      json: false,
      timestamp:true,
      colorize: true
    })
  ],
  exitOnError: false
});


module.exports = logger;
