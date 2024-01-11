# Creates a mini enviroment / virtual computor

# Pulls a package
FROM node:16

# Define working directory of docker container at any given time
WORKDIR /usr/src/app

# Take package, and any extention of package(-lock) into current docker container
COPY package*.json ./

RUN npm install

# Copy everything from source file into docker container
COPY . . 

# Exposes internal port to local machine
EXPOSE 1337

# Execute in docker container
CMD ["npm", "run", "dev"]