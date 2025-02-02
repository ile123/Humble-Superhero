import { Hero } from "./Hero";

export type HumbleHeroFormProps = {
  onSaveHumbleHero: (result: Hero, status: number) => void;
};
