# USE PROMETHEUS WITH DOCKER

First Work with Prometheus for Beginner

## CONFIGURATION :

1. .env

```
DOCKER_IP=YOUR_DOCKER_IP
```

## INSTALL:

1. Run Docker with :

```
docker-compose up
```

2. Install all packages in nodejs

```
yarn
```

or

```
npm install
```

3. Run the server :

```
yarn start
```

4. You can check the metric with :

```
http://localhost:8081/metrics
```

5. Address of prometheus Graph :

```
http://192.168.99.100:9000/
```
