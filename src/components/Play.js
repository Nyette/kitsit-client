import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import { useContext, useState, useEffect } from "react";
import GameContext from "../context/GameContext";
import idle from "../assets/black-marks10.png";

const Play = () => {
  const { game, setGame } = useContext(GameContext);

  const [happiness, setHappiness] = useState(game.cat.happiness);

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

  const silentlySaveThenPause = async () => {
    try {
      const firebaseUser = firebase.auth().currentUser;
      await firebase.firestore().collection("cats").doc(firebaseUser.uid).set({
        happiness: happiness,
        owner_id: firebaseUser.uid,
      });
      setGame({ type: "PAUSE" });
    } catch (e) {
      setGame({
        type: "CATCH_ERROR",
        data: e,
      });
    }
  };

  return (
    <div className="play">
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
      <img className="cat" src={idle} alt="cat" onClick={increaseHappiness} />
      <button className="btn btn-dark btn-lg" onClick={silentlySaveThenPause}>
        Options
      </button>
    </div>
  );
};

export default Play;
