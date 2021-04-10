import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): any[] {
    const task1 = {
      id: 1,
      description: 'Cozinhar',
    };

    const task2 = {
      id: 2,
      description: 'Colocar lixo para fora',
    };

    return [task1, task2];
    //return 'Hello World!';
  }
}
