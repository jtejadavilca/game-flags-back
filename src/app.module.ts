import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import configuration from './config/configuration';
import { MongooseModule } from '@nestjs/mongoose';

import { EnvVariables } from './utils/variables.constants';
import { ControllersModule } from './controllers/controllers.module';

@Module({
  imports: [
    ConfigModule.forRoot({ load: [configuration], isGlobal: true,}),
    MongooseModule.forRootAsync({
      useFactory: async ( configService: ConfigService ) => ({
        uri: configService.get<string>(EnvVariables.DB_URI),
        useNewParser: true,
        useCreateIndex: true
      }),
      
      inject: [ ConfigService ]
    }),
    ControllersModule,
  ],
})
export class AppModule {}
