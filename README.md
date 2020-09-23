- after cloning the project, you don't need npm install. It will be installed inside the container
- setup .env file and provide SAUCE credentials
- double-check the port numbers and container names inside the docker-compose.yml for potential conflicts
- RUN docker-compose up

Docker image used: https://hub.docker.com/r/joscha/docker-sauce-connect/
