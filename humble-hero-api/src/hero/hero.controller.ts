import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpException,
  HttpStatus,
  Post,
} from '@nestjs/common';
import { HeroService } from './hero.service';
import { Hero } from './dto/Hero';

@Controller('superheroes')
export class HeroController {
  constructor(private readonly heroService: HeroService) {}

  @Get()
  @HttpCode(200)
  getAll(): Hero[] {
    return this.heroService.getAll();
  }

  @Post()
  @HttpCode(201)
  save(@Body() hero: Hero): string {
    if (
      hero.humilityScore < 1 ||
      hero.humilityScore > 10 ||
      hero.name === '' ||
      hero.power === ''
    ) {
      throw new HttpException(
        'Humility score is invalid, it has to be between 1 and 10.',
        HttpStatus.BAD_REQUEST,
      );
    }
    return this.heroService.save(hero);
  }
}
