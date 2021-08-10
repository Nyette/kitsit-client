import firebase from "firebase/app";
import "firebase/app-check";
import { useAuth0 } from "@auth0/auth0-react";
import GameContext from "../context/GameContext";
import { useReducer } from "react";
import gameReducer, { initialGame } from "../reducers/gameReducer";
import Loading from "./Loading";
import Game from "./Game";
import Home from "./Home";

const firebaseConfig = {
  apiKey: "AIzaSyDzQlUHI885B5mxf9-qPef-S4auHIzdBbs",
  authDomain: "kitsit-ab31e.firebaseapp.com",
  projectId: "kitsit-ab31e",
  storageBucket: "kitsit-ab31e.appspot.com",
  messagingSenderId: "486752479771",
  appId: "1:486752479771:web:a694e346d1a193e73126be",
  measurementId: "G-ZKMMFLRRKF",
};

firebase.initializeApp(firebaseConfig);

const appCheck = firebase.appCheck();

appCheck.activate("6Lc_PvEbAAAAAMw55GZN2XRMi8BWle6tP6QEZSY5", true);

const App = () => {
  const { isAuthenticated, isLoading } = useAuth0();

  const [game, setGame] = useReducer(gameReducer, initialGame);

  const render = () => {
    if (isLoading) {
      return <Loading />;
    } else {
      if (isAuthenticated) {
        return <Game />;
      } else {
        return <Home />;
      }
    }
  };

  return (
    <GameContext.Provider value={{ game, setGame }}>
      <div className="app">{render()}</div>
    </GameContext.Provider>
  );
};

export default App;
