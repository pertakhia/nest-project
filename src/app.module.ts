import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';
import { NewsModule } from './news/news.module';
import { dataBaseUrl } from './database/secret';

@Module({
  imports: [
    MongooseModule.forRoot(dataBaseUrl, { useNewUrlParser: true }),
    AuthModule,
    NewsModule,
  ],
})
export class AppModule {}
