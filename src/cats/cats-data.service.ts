import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

interface EnvVariablesInterfaceExample {
  DATABASE_USER: string;
  DATABASE_PASSWORD: string;
}

@Injectable()
export class CatsDataService {
  constructor(
    private configService: ConfigService<EnvVariablesInterfaceExample>,
  ) {}

  doStuff(): string {
    /**
     * By using the first optional generic with ConfigService, we get type hints and help prevent accessing config properties
     * that do not exist. Set the second argument to { infer: true } to infer the property type based on the interface.
     */
    const dbUser = this.configService.get('DATABASE_USER');
    console.log('dbUser no inferred type: ', dbUser);
    const dbUserInferredType = this.configService.get('DATABASE_USER', {
      infer: true,
    });
    console.log('dbUser inferred type: ', dbUserInferredType);
    return 'some stuff';
  }
}
