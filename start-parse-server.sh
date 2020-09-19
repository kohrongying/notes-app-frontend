#!/bin/bash

run_mongo() {
  docker run --name my-mongo -d mongo > /dev/null 2>&1
  echo "Mongo container is up"
}

check_arguments() {
  if (( $# != 2 )); then
    echo "Please input <appId> <masterKey>"
    exit 1
  else
    echo "Received appId=$1, masterKey=$2"
    return 0
  fi
}

run_parse() {
  if check_arguments $1 $2; then 
    docker run --name my-parse-server -v cloud-code-vol:/parse-server/cloud -v config-vol:/parse-server/config -p 1337:1337 --link my-mongo:mongo -d parse-server --appId "$1" --masterKey "$2" --databaseURI mongodb://mongo/test > /dev/null 2>&1
    echo "Parse server container is up"
  fi
}

check_dependecies() {
  if ! type "docker" &>/dev/null 2>&1; then
    echo "docker is required."
    exit 1
  elif ! type "jq" &>/dev/null 2>&1; then
    echo "jq is required"
    exit 1
  else
    return 0
  fi
}

check_dependecies

run_mongo 
echo
run_parse $1 $2
