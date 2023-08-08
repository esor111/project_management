"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const swagger_1 = require("@nestjs/swagger");
const response_interceptor_1 = require("./interceptor/response.interceptor");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const config = new swagger_1.DocumentBuilder()
        .setTitle('system example')
        .setDescription('The system API description')
        .setVersion('1.0')
        .addTag('system')
        .addBearerAuth()
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('api', app, document);
    app.useGlobalInterceptors(new response_interceptor_1.TransformResponseInterceptor());
    await app.listen(3002);
}
bootstrap();
//# sourceMappingURL=main.js.map