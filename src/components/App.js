import { useAuth0 } from "@auth0/auth0-react";
import GameContext from "../context/GameContext";
import { useReducer } from "react";
import gameReducer, { initialGame } from "../reducers/gameReducer";
import Loading from "./Loading";
import Game from "./Game";
import Home from "./Home";

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
