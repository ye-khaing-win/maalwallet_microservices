import {
  ArgumentMetadata,
  BadRequestException,
  Injectable,
  PipeTransform,
} from '@nestjs/common';
import { ClassConstructor, plainToInstance } from 'class-transformer';
import { validateSync } from 'class-validator';

@Injectable()
export class GrpcValidationPipe<T extends object> implements PipeTransform {
  constructor(private readonly dto: ClassConstructor<T>) {}

  transform(value: any, metadata: ArgumentMetadata): any {
    console.log('Request', value.request);
    const instance = plainToInstance(this.dto, value);

    const errors = validateSync(instance, {
      whitelist: true,
      forbidNonWhitelisted: true,
    });

    if (errors.length > 0) {
      throw new BadRequestException(errors);
    }

    return instance;
  }
}
