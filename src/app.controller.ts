import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { CityService } from './services/city/city.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly cityService: CityService,
  ) {}
  // constructor() {}

  // @Get()

  @Get()
  findCities() {
    const cities = this.cityService.findCities();
    console.log('cities-', cities);

    return cities;
  }

  getHello(): string {
    return this.appService.getHello();
  }
}
