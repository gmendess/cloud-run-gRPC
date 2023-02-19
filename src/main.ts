import { NestFactory } from "@nestjs/core";
import { AppModule } from "app.module";
import { grpcOptions } from "grpcOptions";

async function bootstrap(): Promise<void> {
    const app = await NestFactory.createMicroservice(AppModule, grpcOptions);
    await app.listen();
}

void bootstrap();
