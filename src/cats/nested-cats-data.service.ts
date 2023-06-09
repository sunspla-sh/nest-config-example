import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class NestedCatsDataService {
  constructor(
    /**
     * The second generic for the ConfigService acts as a type assertion to get rid of all undefined types that ConfigService's methods
     * can return when strictNullChecks is on, but in our case here we technically do not need it because strictNullChecks is off.
     */
    // private configService: ConfigService<{ http: { port: string } }, true>,
    private configService: ConfigService<{ http: { port: string } }>,
  ) {}

  doNestedStuff(): string {
    /**
     * With the infer feature, we can infer the type of a nested custom configuration object's properties, even when using dot notation.
     */
    const p = this.configService.get('http.port', { infer: true });
    /**
     * We would need the non-null assertion operator (!) here only if strictNullsChecks was turned on and we didn't use
     * the second generic set to boolean true within ConfigService as seen above
     */
    // const p = this.configService.get('http.port', { infer: true })!;

    console.log(
      "here's the port env with an inferred type from a nested custom configuration object: ",
      p,
    );

    return 'nested stuff';
  }
}
