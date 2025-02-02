import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { App } from 'supertest/types';
import { AppModule } from './../src/app.module';
import { Hero } from 'src/hero/dto/Hero';

describe('AppController (e2e)', () => {
  let app: INestApplication<App>;
  const heroes: Hero[] = [];

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();
    heroes.push({
      name: 'Spiderman',
      power: 'Web shooting',
      humilityScore: 10,
    });
    heroes.push({
      name: 'Batman',
      power: 'No powers',
      humilityScore: 7,
    });
    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/')
      .expect(200)
      .expect('Hello World!');
  });
  it('/superheroes (GET)', () => {
    return request(app.getHttpServer()).get('/superheroes').expect(200);
  });
  it('/superheroes (POST)', () => {
    const newHero: Hero = {
      name: 'Wonder Woman',
      power: 'Strength',
      humilityScore: 9,
    };
    return request(app.getHttpServer())
      .post('/superheroes')
      .send(newHero)
      .set('Content-Type', 'application/json')
      .expect(201)
      .expect((res) => {
        expect(res.body).toEqual('Hero added to the collection.');
      });
  });
});
