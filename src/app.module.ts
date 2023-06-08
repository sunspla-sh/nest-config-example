import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { CatsModule } from './cats/cats.module';
import { configurationFactory } from './config/configuration';
import { configurationYamlFactory } from './config/configurationYaml';

@Module({
  imports: [
    CatsModule,
    // ConfigModule.forRoot() // this configures our module to load a default .env file in project root directory
    // ConfigModule.forRoot({
    //   envFilePath: '.development.env', // this configures our module to load a named .env file in whichever directory we choose
    // }),
    // ConfigModule.forRoot({
    //   envFilePath: '.development.env',
    //   isGlobal: true, // this registers our module as a global module so that we don't need to import it manually in other modules
    // }),
    // ConfigModule.forRoot({
    //   envFilePath: '.development.env',
    //   load: [configurationFactory], //this uses a custom configurationFactory function to map our .development.env file to an object of our own design
    //   isGlobal: true,
    // }),
    ConfigModule.forRoot({
      envFilePath: '.development.env',
      load: [configurationFactory, configurationYamlFactory], //here we're also using a custom configurationYamlFactory with a config.yaml file
      isGlobal: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
