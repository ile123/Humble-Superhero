import { Injectable } from '@nestjs/common';
import { Hero } from './dto/Hero';

@Injectable()
export class HeroService {
  heroes: Hero[] = [];

  getAll() {
    return this.heroes.sort((a, b) => b.humilityScore - a.humilityScore);
  }

  save(hero: Hero): string {
    this.heroes.push(hero);
    return 'Hero added to the collection.';
  }
}
