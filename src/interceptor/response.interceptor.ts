import { CallHandler, ExecutionContext, Injectable, NestInterceptor, Response } from "@nestjs/common";
import { Observable } from "rxjs";
import { map } from 'rxjs/operators';

export interface Response<T> {
    data: T;
}

@Injectable()
export class TransformResponseInterceptor<T> implements NestInterceptor<T, Response<T>> {
    intercept(context: ExecutionContext, next: CallHandler): Observable<Response<T>> {
        const { query, method, params, user } = context.switchToHttp().getRequest();


        return next.handle().pipe(map((responseData) => {
        return responseData;
            
        })
        )
    }
} 