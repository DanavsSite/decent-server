import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { ValidationPipe } from "@nestjs/common";
import * as cookieParser from "cookie-parser";
async function bootstrap() {
	const app = await NestFactory.create(AppModule);
	app.useGlobalPipes(new ValidationPipe());
	app.enableCors({
		origin: "http://localhost:5173",
		methods: ["GET", "POST"],
		allowedHeaders: ["Content-Type", "Authorization"],
		credentials: true,
		exposedHeaders: ["Content-Type", "Authorization"],
	});
	app.use(cookieParser());
	await app.listen(3000);
}
bootstrap();