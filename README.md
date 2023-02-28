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

## Testing

Compile `.proto` file to `.protoset`

```shell
$ protoc --proto_path=./ \
    --descriptor_set_out=person.protoset \
    --include_imports \
    ./src/protos/person/person.proto
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

## Deploy to Cloud Run

```shell
$ gcloud run deploy nestjs-grpc-server \
    --source=. \
    --max-instances=1 \
    --min-instances=0 \
    --memory=128Mi \
    --allow-unauthenticated \
    --use-http2 \
    --region=southamerica-east1
```

To test the gRPC server deployed to cloud run, its necessary to remove the flag `-plaintext` from `grpcurl` command, because now TLS is enabled. Also, instead `localhost` you need to use the url from the deployed service (without `https://`) using port `443`.

## JSON/REST transcription

Its possible to transcribe JSON/REST http call to gRPC using GCP Cloud Endpoints + ESPv2. More details how to do that, read the file `HTTP_TRANSCRIPTION.md`
