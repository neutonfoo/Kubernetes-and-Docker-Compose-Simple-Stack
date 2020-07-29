# Install NGINX Ingress Controller

- Needed for k8s deployment (used instead of the nginx reverse proxy)

https://kubernetes.github.io/ingress-nginx/

- NGINX Ingress Controller will be installed in the `ingress-nginx` namespace
- Port 80 will automatically be exposed
- Configuation is stored in k8s/ingress-service.yaml

`kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/controller-v0.34.1/deploy/static/provider/cloud/deploy.yaml`

# React Client

The client was created with `npx create-react-app client`. The `.git` and `node_module` folders were deleted. `App` was modified to load a value from an Express endpoint on `componentDidMount()` with Axios.

To build and push the client image to Docker Hub, run

```sh
docker build client -t neutonfoo/client
docker push neutonfoo/client
```

# Express Server

The server was created with only a bare `package.json` file serving a single endpoint `/api/value`.

To build and push the server image to Docker Hub, run

```sh
docker build server -t neutonfoo/server
docker push neutonfoo/server
```

# docker-compose

To run this application with Docker Compose, simply run `docker-compose up --build` and `docker-compose down` when you're done. With Docker Compose, an nginx server is used as a reverse proxy direct traffic to either the nginx server hosting the client, or the Express server API.

# k8s

- You will need NGINX Ingress Controller installed.

To run this application in Kubernetes, you will have to have `NGINX Ingress Controller` installed (above). This nginx Ingress server is used instead of the nginx reverse proxy in the Docker Compose deployment.

```sh
kubectl apply -f k8s
```

# Cleanup

```sh
kubectl delete -f k8s
kubectl delete namespace ingress-nginx
```
