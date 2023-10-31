import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

const configService = new ConfigService();

@Module({
  imports: [
    MongooseModule.forRootAsync({
      useFactory: () => ({
        uri: configService.getOrThrow('MONGO_URI'),
      }),
    }),
  ],
  providers: [ConfigService],
})
export class DbModule {}
