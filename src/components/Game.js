import { useContext } from "react";
import GameContext from "../context/GameContext";
import MainMenu from "./MainMenu";
import Play from "./Play";

const Game = () => {
  const { game } = useContext(GameContext);

  const render = () => {
    if (game.running) {
      if (!game.paused) {
        return <Play />;
      }
    } else {
      return <MainMenu />;
    }
  };

  return <main className="container text-center game">{render()}</main>;
};

export default Game;
