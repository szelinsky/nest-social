import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const PORT = process.env.PORT ?? 8000;
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Social Network')
    .setDescription('Documentation Rest API')
    .setVersion('1.0.0')
    // .addTag('r_d')
    .build();
  const document = SwaggerModule.createDocument(app, config)
  SwaggerModule.setup('/api/docs', app, document)

  app.setGlobalPrefix('api');
  await app.listen(PORT, () => console.log(`Server started on port: ${PORT}`));
}
bootstrap();
