# todo-app-deployment
Deploying with Kubernetes a TODO app with Nginx, Node.js and MongoDB

## TODO App
Used the tutorial written by Hie Nguyen to create the [backend](https://www.devsurvival.com/todo-app-react-backend/) and the [frontend](https://www.devsurvival.com/todo-app-react-frontend/) in Node.js for a minimal TODO list app. I also added authentication for the backend to the MongoDB database used to store the list items.

## Docker
The frontend and backend were packaged in separate images, having their own Dockerfile. A compose file was written to test deployment in Docker.

## Kubernetes
MicroK8s flavor of Kubernetes was used on an Ubuntu 22.04 machine. Using kompose the docker compose file was translated to Kubernetes manifest files. Changes were made to use secrets and to not pull frontend and backend images because those are created locally. Another file, *todo-secrets.yaml* was written to build the secrets needed in authentication. An ingress controller was addded. Http / calls are routed to the frontend pod and /todos are calls for the backend.

## Deployment
*deploy.sh* is a bash script that builds the frontend and backend docker images, adds them to microk8s and finally creates the resources described.
