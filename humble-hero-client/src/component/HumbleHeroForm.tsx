import { useState } from "react";
import { HumbleHeroFormProps } from "../type/HumbleHeroFormProps";
import { Hero } from "../type/Hero";
import { saveHumbleHero } from "../service/HeroService";
import {
  Button,
  NumberInput,
  TextInput,
  Window,
  WindowContent,
  WindowHeader,
} from "react95";

export default function HumbleHeroForm(props: HumbleHeroFormProps) {
  const [hero, setHero] = useState<Hero>({
    name: "",
    power: "",
    humilityScore: 5,
  });

  const handleChange = (key: string, value: string | number) => {
    setHero({
      ...hero,
      [key]: value,
    });
  };

  const onSubmitHandler = () => {
    saveHumbleHero(hero)
      .then((result) => {
        //In a error message, the data is an object, while in a 200 response message, it is a string.
        if(result?.data instanceof Object) {
          props.onSaveHumbleHero(hero, result?.data.statusCode);
          return;
        }
        props.onSaveHumbleHero(hero, result?.status);
      });
  };

  return (
    <>
      <Window className="min-w-[30rem] overflow-y-auto">
        <WindowHeader>Add new hero</WindowHeader>
        <WindowContent>
          <div className="flex flex-col space-y-6">
            <TextInput
              value={hero.name}
              placeholder="Type name here..."
              onChange={(e) => handleChange("name", e.target.value)}
              width={150}
            />
            <br />
            <TextInput
              value={hero.power}
              placeholder="Type power here..."
              onChange={(e) => handleChange("power", e.target.value)}
              width={150}
            />
            <br />
            <NumberInput
              onChange={(e) => handleChange("humilityScore", e)}
              defaultValue={5}
              step={1}
              min={1}
              max={10}
            />
            <br />
            <Button onClick={onSubmitHandler} type="submit">
              Submit
            </Button>
          </div>
        </WindowContent>
      </Window>
    </>
  );
}
