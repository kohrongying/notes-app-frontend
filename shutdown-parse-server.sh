#!/bin/bash

docker container stop $(docker container ls -q --filter name=my-parse-server) > /dev/null 2>&1
docker container stop $(docker container ls -q --filter name=my-mongo) > /dev/null 2>&1

docker rm $(docker ps -aq) > /dev/null 2>&1

docker volume prune -f > /dev/null 2>&1

echo "Removed parse-server and mongo containers and volumes."