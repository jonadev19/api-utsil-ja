import { Module } from '@nestjs/common';
import { CenotesService } from './cenotes.service';
import { CenotesController } from './cenotes.controller';

@Module({
  controllers: [CenotesController],
  providers: [CenotesService],
  exports: [CenotesService],
})
export class CenotesModule {}
