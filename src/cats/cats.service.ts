import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class CatsService {
  private cats: Array<string> = ['bob the cat', 'jim the cat'];

  constructor(private configService: ConfigService) {}

  findAll(): Array<string> {
    console.log(this.configService.getOrThrow<string>('DATABASE_PASSWORD'));
    console.log(this.configService.get<string>('database.user'));
    console.log(this.configService.get<string>('http.port')); //this is from our yaml config file
    return this.cats;
  }
}
