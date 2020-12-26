FROM golang:1.13.14-alpine3.12
RUN mkdir /app
ADD . /app
WORKDIR /app
RUN go build -o main .
EXPOSE 9090
CMD ["/app/main"]