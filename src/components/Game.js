import { useContext } from "react";
import GameContext from "../context/GameContext";
import Fetching from "./Fetching";
import MainMenu from "./MainMenu";
import Play from "./Play";
import Create from "./Create";
import Options from "./Options";

const Game = () => {
  const { game } = useContext(GameContext);

  const render = () => {
    if (game.fetching) {
      return <Fetching />;
    } else {
      if (game.running) {
        if (game.paused) {
          return <Options />;
        } else {
          if (game.cat) {
            return <Play />;
          } else {
            return <Create />;
          }
        }
      } else {
        return <MainMenu />;
      }
    }
  };

  return <main className="container text-center game">{render()}</main>;
};

export default Game;
