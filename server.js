var express = require('express');
var bodyParser = require('body-parser');
var jolokia = require("./server/jolokia.js");
var logger = require('./server/logger.js')
var Service = require('./server/service.js')
var Configuracion = require('./server/configuracion.js')

var configuracion = new Configuracion();
var app = express();

app.use(express.static('app'));
app.use(bodyParser.json());

var responseBuilder = function(res){
  return function(response){res.json(response);};
};


app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Content-Type","application/json");
  next();
});

app.get('/api/rest/nodos', function(req, res){
  res.json(configuracion.all());
});

app.get('/api/rest/nodos/:id', function(req, res){
  res.json(configuracion.get(req.params.id));
});

app.get('/api/rest/nodos/:nodo/containers', function(req, res){
  var service = buildService(req.params.nodo);
  service.getContainers(responseBuilder(res));
});

app.get('/api/rest/:nodo/containers/:id', function(req, res){
var service = buildService(req.params.nodo);
  service.getContainer(req.params.id,responseBuilder(res));
});

app.get('/api/rest/:nodo/containers/:id/alive', function(req, res){
var service = buildService(req.params.nodo);
  service.getContainerAliveAndOK(req.params.id,responseBuilder(res));
});

app.get('/api/rest/:nodo/containers/:id/provisionStatus', function(req, res){

var service = buildService(req.params.nodo);
  service.getContainerProvisionStatus(req.params.id,responseBuilder(res));
});


app.get('/api/rest/configuracion', function(req, res){
  res.json(configuracion.all());
});

var buildService = function(node){
  var nodo = configuracion.get(node);
  var access = configuracion.access(node);
  var client = new jolokia(nodo.url,access.user,access.password);
  var service = new Service(client);
  return service;
};


app.listen(3000);
logger.info("Listening port: 3000");
