# Node.js Express & PostgreSQL CRUD Backend
This repository contains a CRUD (Create, Read, Update, Delete) backend built using Node.js Express and PostgreSQL. It provides a RESTful API for managing data in a PostgreSQL database.

## Features
- Create, Read, Update, and Delete operations for managing resources.
- Uses Node.js and Express for the backend server.
- PostgreSQL database for data storage.
- Dockerized for easy deployment.

## Prerequisites
- Node.js and npm installed locally.
- Docker installed

## Getting started
1. Clone the repository:
```git clone https://github.com/yourusername/your-repo.git```
2. Install dependencies
```cd your-repo```
```npm install```

## Instructions

Follow these steps to set up and run the backend:

### 1. Build Docker Image

Run the following command to build the Docker image:

```bash
sudo docker build -t <image_name> .
```

Replace `<image_name>` with the desired name for your Docker image.

### 2. Check Docker Images

After building the image, you can verify it by running:

```bash
docker images
```

This command lists all Docker images on your system. Ensure that your newly built image is listed.

### 3. Start Docker Containers

Use Docker Compose to start the containers defined in the `docker-compose.yml` file:

```bash
docker-compose up
```

This command starts the Node.js Express backend and PostgreSQL database.

### 4. (Optional) Prune Docker System

To clean up Docker resources and restart the server fresh, you can run:

```bash
docker system prune
```

Be cautious when using this command as it deletes all unused data (containers, networks, volumes, and images).

### Additional Notes

- If you want to see all containers, including those that are not currently running, you can use the following command:
  ```bash
  docker ps -a
  ```
  This command lists all containers on your system, including stopped ones.

- Make sure to configure your Node.js application to connect to the PostgreSQL database using the provided environment variables.
- Replace placeholders such as `<image_name>` in the commands with appropriate values.
