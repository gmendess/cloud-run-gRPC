# nestjs-grpc-server

## Run local

```shell
$ npm install
$ npm run build
$ npm run start
```

## Run Local (with docker)

```shell
$ docker build . -t <image>
$ docker run -d -p 8080:8080 <image>
```

## Testing (without reflection)

Compile `.proto` file to `.protoset`

```shell
$ protoc --proto_path=./ \
    --descriptor_set_out=person.protoset \
    --include_imports \
    ./src/person/proto/person.proto
```

`protoc` reference https://grpc.io/docs/protoc-installation/

Call service using `grpcurl`

```shell
$ grpcurl -plaintext \
    -protoset ./person.protoset \
    -d '{ "name": "Gabriel" }' \
    localhost:8080 \
    person.PersonService.FindOne
```

`grpcurl` reference https://github.com/fullstorydev/grpcurl

## Testing (with reflection)

This sample supports reflection by providing informantion about gRPC services on the server. With reflection enabled, its not necessary to compile the `.proto` files.

```shell
$ grpcurl -plaintext \
    -d '{ "name": "Gabriel" }' \
    localhost:8080 \
    person.PersonService.FindOne
```
