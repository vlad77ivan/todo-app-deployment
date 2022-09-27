#!/bin/bash

docker compose build

docker save vlad/todo-frontend:local > todo-frontend.tar
docker save vlad/todo-backend:local > todo-backend.tar

microk8s ctr image import todo-frontend.tar
microk8s ctr image import todo-backend.tar

microk8s kubectl apply -f 'todo*.yaml'