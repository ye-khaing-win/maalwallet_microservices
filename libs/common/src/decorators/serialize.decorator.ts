import { ClassConstructor } from 'class-transformer';
import { UseInterceptors } from '@nestjs/common';
import { SerializerInterceptor } from '../interceptors';

export function Serialize(dto: any) {
  return UseInterceptors(new SerializerInterceptor(dto));
}
