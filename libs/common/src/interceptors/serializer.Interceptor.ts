import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { map, Observable } from 'rxjs';
import {
  ClassConstructor,
  plainToInstance,
  instanceToPlain,
} from 'class-transformer';

@Injectable()
export class SerializerInterceptor<T> implements NestInterceptor {
  constructor(private readonly dto: ClassConstructor<T>) {
  }

  intercept(
    context: ExecutionContext,
    next: CallHandler<any>,
  ): Observable<any> {
    return next.handle().pipe(
      map((res) => {
        const data = plainToInstance(this.dto, res, {
          excludeExtraneousValues: true,
        });

        const plain = instanceToPlain(data, {
          excludeExtraneousValues: true,
        });

        console.log(data);

        return {
          success: true,
          data: plain,
        };
      }),
    );
  }
}
