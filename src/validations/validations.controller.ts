import { Controller } from '@nestjs/common';
import { ValidationsService } from './validations.service';

@Controller('validations')
export class ValidationsController {
  constructor(private readonly validationsService: ValidationsService) {}
}
