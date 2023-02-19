import { Module } from "@nestjs/common";
import { grpcOptions } from "grpcOptions";
import { GrpcReflectionModule } from "nestjs-grpc-reflection";
import { PersonModule } from "person/person.module";

@Module({
    imports: [PersonModule, GrpcReflectionModule.register(grpcOptions)],
})
export class AppModule {}
