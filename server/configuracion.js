var logger = require('./logger.js');
var fs = require('fs');
var _ = require('underscore');

var configuracion = function(){

  this.all = function(){
    return JSON.parse(fs.readFileSync('config/configuracion.json', 'utf8'));
  }

  this.get = function(id){
    return _.find(JSON.parse(fs.readFileSync('config/configuracion.json', 'utf8')),function(elem){return elem.id === id});
  }

  this.access = function(id){
    return _.find(JSON.parse(fs.readFileSync('config/access.json', 'utf8')),function(elem){return elem.id === id});
  }
}


module.exports = configuracion;
