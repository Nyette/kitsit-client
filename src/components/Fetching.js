import { useAuth0 } from "@auth0/auth0-react";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import { useContext, useState, useEffect } from "react";
import GameContext from "../context/GameContext";

const Fetching = () => {
  const { user } = useAuth0();

  const { setGame } = useContext(GameContext);

  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const fetchCat = async () => {
      const proxyUrl = "https://kitsit-api.herokuapp.com/auth/firebase";
      const config = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user_id: user.sub,
        }),
      };
      try {
        const res = await fetch(proxyUrl, config);
        const data = await res.json();
        await firebase.auth().signInWithCustomToken(data.firebaseToken);
        setProgress(50);
        const firebaseUser = firebase.auth().currentUser;
        const savedCat = await firebase
          .firestore()
          .collection("cats")
          .doc(firebaseUser.uid)
          .get();
        if (savedCat.exists) {
          setProgress(100);
          setTimeout(() => {
            setGame({
              type: "END_FETCH",
              data: savedCat.data(),
            });
          }, 2000);
        } else {
          const newCat = await firebase
            .firestore()
            .collection("cats")
            .doc(firebaseUser.uid)
            .set({
              happiness: 100,
              owner_id: firebaseUser.uid,
            });
          setProgress(100);
          setTimeout(() => {
            setGame({
              type: "END_FETCH",
              data: newCat.data(),
            });
          }, 2000);
        }
      } catch (e) {
        setGame({
          type: "CATCH_ERROR",
          data: e,
        });
      }
    };

    fetchCat();
  }, [setGame, user.sub]);

  return (
    <div className="main-menu">
      <label htmlFor="fetch">Fetching your kitty...</label>
      <progress id="fetch" max="100" value={progress}></progress>
    </div>
  );
};

export default Fetching;
