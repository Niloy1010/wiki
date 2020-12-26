# Locally Run Wiki 

This project is built on React and Go. This lets user see all the articles, create or edit an article.

## Available Scripts

In the project directory, you can run:

### `npm i && npm run build`

Install all the packages and dependencies necessary for the Project.
Then it builds for production.

### `npm run wiki`

Your app is ready. Go to
[http://localhost:3000](http://localhost:3000) to see it in action

### `npm run test`

Launches the test runner in the interactive watch mode.\

# Dockerize Wiki
The whole application can be built with one command using NGINX as reverse proxy.

## docker-compose up
This single command will create, build and run the application on http://localhost:8080 on linux machine. 
If you are using docker toolbox for google you have to go to nginx.conf file inside reverse proxy folder and change the IP according to your device. (I.E) http://192.168.99.102


## docker run -ti -p 8080:8080 md-wiki:2019
This will run the image on localhost:8080 however the server has to be then run manually.
