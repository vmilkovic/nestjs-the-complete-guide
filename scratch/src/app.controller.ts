import { Controller, Get } from '@nestjs/common';

@Controller('/app')
export class AppController {
  @Get()
  getRootRoute() {
    return 'Root';
  }

  @Get('/hi')
  getHiRoute() {
    return 'Hi there!';
  }

  @Get('/bye')
  getByeThere() {
    return 'Bye there!';
  }
}
