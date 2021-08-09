import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import { useContext } from "react";
import GameContext from "../context/GameContext";

const Options = () => {
  const { setGame } = useContext(GameContext);

  const silentlyFetchThenResume = async () => {
    try {
      const firebaseUser = firebase.auth().currentUser;
      const fetchedCat = await firebase
        .firestore()
        .collection("cats")
        .doc(firebaseUser.uid)
        .get();
      setGame({
        type: "END_FETCH",
        data: fetchedCat.data(),
      });
      setGame({ type: "RESUME" });
    } catch (e) {
      setGame({
        type: "CATCH_ERROR",
        data: e,
      });
    }
  };

  return (
    <div className="main-menu">
      <p>Click on your cat to pet them.</p>
      <button className="btn btn-dark btn-lg" onClick={silentlyFetchThenResume}>
        Resume
      </button>
      <button
        className="btn btn-dark btn-lg"
        onClick={() => setGame({ type: "EXIT" })}
      >
        Exit
      </button>
    </div>
  );
};

export default Options;
