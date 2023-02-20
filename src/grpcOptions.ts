import { GrpcOptions, Transport } from "@nestjs/microservices";
import { addReflectionToGrpcConfig } from "nestjs-grpc-reflection";
import { join } from "path";

export const grpcOptions: GrpcOptions = addReflectionToGrpcConfig({
    transport: Transport.GRPC,
    options: {
        package: ["person"],
        protoPath: [join(__dirname, "protos/person/person.proto")],
        url: "0.0.0.0:8080",
    },
});
