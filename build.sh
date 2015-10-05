#! /bin/bash


docker build -t fuse-registry .

docker run -d -p 9001:80 --name fuse-registry fuse-registry
