import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';
import { NewsModule } from './news/news.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/nest') ,AuthModule, NewsModule],
})
export class AppModule {}
