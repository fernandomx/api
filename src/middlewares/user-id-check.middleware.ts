import { BadRequestException, NestMiddleware } from "@nestjs/common";
import { Request, Response, NextFunction } from "express";

export class UserIdCheckMiddleware implements NestMiddleware{
  use(req: Request, res: Response, next: NextFunction) {

    //verificar o id se eh valido antes de executar a consulta no BD;
    console.log('UserIdCheckMiddleware', 'antes')
    if (isNaN(Number(req.params.id)) || Number(req.params.id) <=0) {
      throw new BadRequestException('ID invalido');
    }
    console.log('UserIdCheckMiddleware', 'depois')
    next();
  }
}
    