import { useContext, useState, useEffect } from "react";
import GameContext from "../context/GameContext";

const Play = () => {
  const { game, setGame } = useContext(GameContext);

  const [happiness, setHappiness] = useState(game.cat.happiness);

  // eslint-disable-next-line
  const [furPattern, setFurPattern] = useState(game.cat.furPattern);

  // eslint-disable-next-line
  const [frame, setFrame] = useState("10");

  // eslint-disable-next-line
  const [imagePath, setImagePath] = useState(
    require("../assets/" + furPattern + frame + ".png").default
  );

  useEffect(() => {
    if (happiness >= 5) {
      const happinessDecay = setTimeout(() => {
        setHappiness(happiness - 5);
      }, 5000);
      return () => clearTimeout(happinessDecay);
    }
  }, [happiness]);

  const increaseHappiness = () => {
    if (happiness <= 95) {
      setHappiness(happiness + 5);
    } else {
      setHappiness(100);
    }
  };

  return (
    <div className="play">
      <button
        className="btn btn-dark btn-lg"
        onClick={() => {
          setGame({
            type: "PAUSE",
            data: {
              ...game.cat,
              happiness: happiness,
              furPattern: furPattern,
            },
          });
        }}
      >
        Options
      </button>
      <div className="stats">
        <label htmlFor="happiness">Happiness</label>
        <meter
          id="happiness"
          min="0"
          max="100"
          low="30"
          high="65"
          optimum="80"
          value={happiness}
        ></meter>
      </div>
      <img
        className="cat"
        src={imagePath}
        alt="cat"
        onClick={increaseHappiness}
      />
    </div>
  );
};

export default Play;
