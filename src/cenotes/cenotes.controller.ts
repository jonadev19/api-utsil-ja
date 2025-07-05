import { Controller } from '@nestjs/common';
import { CenotesService } from './cenotes.service';

@Controller('cenotes')
export class CenotesController {
  constructor(private readonly cenotesService: CenotesService) {}
}
