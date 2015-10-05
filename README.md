# Fuse Registry UI

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
  fuse-registry-ui
```
