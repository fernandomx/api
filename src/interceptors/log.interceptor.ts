import { CallHandler, ExecutionContext, NestInterceptor } from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';


//Verificar e interceptar as requisicoes e avaliar o tempo de uso delas.
export class LogInterceptor implements NestInterceptor{
    
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {

    const dt = Date.now();
    return next.handle().pipe(
      tap(() => {

        const request = context.switchToHttp().getRequest();

        console.log(`URL: ${request.url}`);
        console.log(`METHOD: ${request.method}`);
        console.log(`Execucao levou:  ${Date.now() - dt} milisegundos.`);
      })    
    )
    }
}
