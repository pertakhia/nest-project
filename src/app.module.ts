import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';
import { NewsModule } from './news/news.module';
import { dataBaseUrl } from './database/secret';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProdactModule } from './prodact/prodact.module';
import { User } from './typeorm/entities/User';

@Module({
  imports: [
    // MongooseModule.forRoot(dataBaseUrl, { useNewUrlParser: true }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '123456',
      database: 'nest_db',
      entities: [User],
      synchronize: true,
    }),
    AuthModule,
    ProdactModule,
  ],
})
export class AppModule {}
