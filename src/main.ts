import { NestFactory } from "@nestjs/core";
import { Transport } from "@nestjs/microservices";
import { AppModule } from "app.module";
import { join } from "path";

async function bootstrap(): Promise<void> {
    const app = await NestFactory.createMicroservice(AppModule, {
        transport: Transport.GRPC,
        options: {
            package: ["person"],
            protoPath: [join(__dirname, "protos/person/person.proto")],
            url: "0.0.0.0:8080",
        },
    });
    await app.listen();
}

void bootstrap();
