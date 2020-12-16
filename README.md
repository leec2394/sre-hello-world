# sre-hello-world-app

A basic hello world application with nodejs

* Uses the express framework as a dependency
* Builds a simple HTTP server which serves traffic on port 8080
* Automated deployments via the GKE continous delivery pipelines

**Local builds**

Via Docker
* ```docker build -t sre-hello-world-app .```
* ```docker run --rm -p 8080:8080 sre-hello-world-app:latest```
* ```curl http://localhost:8080```

Via node
* ```npm install```
* ```node index.js```
* ```curl http://localhost:8080```