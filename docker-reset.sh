#!/bin/bash

echo 'Stopping and removing Docker containers and matching images'

docker compose down
docker image rm approachtrail-api approachtrail-web postgres