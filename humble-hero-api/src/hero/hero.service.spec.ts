import { Test, TestingModule } from '@nestjs/testing';
import { HeroService } from './hero.service';
import { Hero } from './dto/Hero';

describe('HeroService', () => {
  let service: HeroService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HeroService],
    }).compile();

    service = module.get<HeroService>(HeroService);

    service.save({
      name: 'Spiderman',
      power: 'Web shooting',
      humilityScore: 10,
    });
    service.save({ name: 'Batman', power: 'No powers', humilityScore: 7 });
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should get all heroes', () => {
    const heroes = service.getAll();
    expect(heroes).toEqual([
      { name: 'Spiderman', power: 'Web shooting', humilityScore: 10 },
      { name: 'Batman', power: 'No powers', humilityScore: 7 },
    ]);
  });

  it('should add a new hero', () => {
    const newHero: Hero = {
      name: 'Wonder Woman',
      power: 'Strength',
      humilityScore: 9,
    };
    service.save(newHero);
    const heroes = service.getAll();
    expect(heroes).toContainEqual(newHero);
  });

  it('should validate humility score when adding a hero', () => {
    const invalidHero: Hero = {
      name: 'Invalid Hero',
      power: 'Unknown',
      humilityScore: 11,
    };
    expect(() => service.save(invalidHero)).toThrow(
      'Humility score is invalid, it has to be between 1 and 10.',
    );
  });
});
