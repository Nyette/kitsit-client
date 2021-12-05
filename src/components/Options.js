import { useContext } from "react";
import GameContext from "../context/GameContext";

const Options = () => {
  const { setGame } = useContext(GameContext);

  return (
    <div className="main-menu">
      <p>Click on your cat to pet them.</p>
      <button
        className="btn btn-dark btn-lg"
        onClick={() => setGame({ type: "RESUME" })}
      >
        Resume
      </button>
      <button
        className="btn btn-dark btn-lg"
        onClick={() => {
          setGame({ type: "SAVE" });
          setGame({ type: "END_SAVE" });
          setGame({ type: "EXIT" });
        }}
      >
        Exit
      </button>
    </div>
  );
};

export default Options;
