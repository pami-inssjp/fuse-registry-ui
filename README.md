# Fuse Registry UI

El objetivo principal de haber construido una interfaz diferente a howtio es permitir a personal de operaciones acceder a información de la consola (y en un fututo realizar algunas acciones) sin necesidad de tener grandes conocimientos para administrar fuse. Así mismo para adecuar la arquitectura a la cultura de la organización se optó por utilizar nodos stand-alone dejando de lado muchos de las caracteristicas de Fuse pero otorgando mator libertad al personal para su uso.
Por todo esto lo llamamos registry ui, ya que representa el registro de servicios que estan corriendo formalmente en la infraestructura y pueden visializarse de manera amena, para su monitoreo y su mantenimiento operativo.

## Docker build

```bash
$ docker build -t fuse-registry-ui .
```

## Docker
```bash
$ docker run -d -p 3000:3000 \
  -v "$PWD/configuracion.json:/usr/src/app/config/configuracion.json" \
  -v "$PWD/access.json:/usr/src/app/config/access.json" \
  --name fuse-registry-ui \
  itpami/fuse-registry-ui
```
