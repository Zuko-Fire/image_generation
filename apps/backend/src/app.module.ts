import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './modules/user/user.module';
import { AuthModule } from './modules/auth/auth.module';
import { ArtModule } from './modules/art/art.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { ConfigModule } from '@nestjs/config';
import { User } from './modules/user/user.model';
import { Art } from './modules/art/art.model';
import { StableDiffusionModule } from './modules/stable-diffusion/stable-diffusion.module';

@Module({
  imports: [ConfigModule.forRoot({isGlobal: true, envFilePath: '.env'}),
    SequelizeModule.forRoot({
    dialect: 'postgres',
    host: process.env.POSTGRES_HOST,
    port: Number(process.env.POSTGRES_PORT),
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB,
    models: [User, Art],
  }),
  UserModule,
  AuthModule,
  ArtModule,
  StableDiffusionModule,
],
  
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
