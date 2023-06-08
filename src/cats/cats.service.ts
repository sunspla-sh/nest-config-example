import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { DatabaseConfig } from 'src/config/configuration';

@Injectable()
export class CatsService {
  private cats: Array<string> = ['bob the cat', 'jim the cat'];

  constructor(private configService: ConfigService) {}

  findAll(): Array<string> {
    console.log(this.configService.getOrThrow<string>('DATABASE_PASSWORD'));
    console.log(this.configService.get<string>('database.user'));
    console.log(this.configService.get<string>('http.port')); //this is from our yaml config file

    // we can get whole nested configuration object by using an interface as the type hint
    const database = this.configService.get<DatabaseConfig>('database');
    console.log(
      'user and pass from interface type hint: ',
      database.user,
      database.pass,
    );

    return this.cats;
  }
}
