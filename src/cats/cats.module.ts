import { Module } from '@nestjs/common';
import { CatsService } from './cats.service';
import { CatsController } from './cats.controller';
import { CatsDataService } from './cats-data.service';

@Module({
  providers: [CatsService, CatsDataService],
  controllers: [CatsController],
})
export class CatsModule {}
