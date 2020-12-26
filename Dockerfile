
FROM node:alpine3.10 AS build

RUN apk add --no-cache git make musl-dev go

# Configure Go
ENV GOROOT /usr/lib/go
ENV GOPATH /go
ENV PATH /go/bin:$PATH
RUN mkdir -p ${GOPATH}/src ${GOPATH}/bin


RUN mkdir -p /app
WORKDIR '/app'

COPY package.json /app/
RUN npm install

ADD src /app/src
ADD public /app/public
ADD backend /app/backend

RUN npm run build

# EXPOSE 3000

# CMD ["npm","run","wiki"]

FROM nginx:1.16.0-alpine AS production
RUN mkdir /app
COPY --from=build /app/build /app

# RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/nginx.conf
COPY default.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx","-g","daemon off;" ]


