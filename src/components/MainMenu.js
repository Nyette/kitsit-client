import { useContext } from "react";
import GameContext from "../context/GameContext";
import LogOut from "./LogOut";

const MainMenu = () => {
  const { setGame } = useContext(GameContext);

  return (
    <div className="main-menu">
      <button
        className="btn btn-dark btn-lg"
        onClick={() => setGame({ type: "PLAY" })}
      >
        Play
      </button>
      <LogOut />
    </div>
  );
};

export default MainMenu;
