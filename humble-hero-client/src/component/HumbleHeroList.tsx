import {
  Table,
  TableBody,
  TableDataCell,
  TableHead,
  TableHeadCell,
  TableRow,
  Window,
  WindowContent,
  WindowHeader,
} from "react95";
import { HumbleHeroListProps } from "../type/HumbleHeroListProps";
import { useEffect, useState } from "react";
import { Hero } from "../type/Hero";

export default function HumbleHeroList(props: HumbleHeroListProps) {
  const [heroes, setHeroes] = useState<Hero[]>([]);

  useEffect(() => {
    setHeroes([...props.humbleHeroList].sort((a, b) => b.humilityScore - a.humilityScore));
  }, [props.humbleHeroList]);

  return (
    <>
      <Window className="min-w-[30rem] overflow-y-auto">
        <WindowHeader>Heroes</WindowHeader>
        <WindowContent>
          {heroes.length === 0 ? (
            <h3 className="text-center">No heroes found</h3>
          ) : (
            <Table>
              <TableHead className="text-center">
                <TableRow>
                  <TableHeadCell className="w-20">Name</TableHeadCell>
                  <TableHeadCell className="w-20">Power</TableHeadCell>
                  <TableHeadCell className="w-20">Humility Score</TableHeadCell>
                </TableRow>
              </TableHead>
              <TableBody className="text-center overflow-y-auto">
                {heroes.map((item, key) => (
                  <TableRow key={key}>
                    <TableDataCell className="w-20 text-center overflow-y-auto">
                      {item.name}
                    </TableDataCell>
                    <TableDataCell className="w-20 overflow-y-auto">
                      {item.power}
                    </TableDataCell>
                    <TableDataCell className="w-20 overflow-y-auto">
                      {item.humilityScore}
                    </TableDataCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
        </WindowContent>
      </Window>
    </>
  );
}
