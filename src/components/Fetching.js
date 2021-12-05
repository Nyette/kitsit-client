import { useAuth0 } from "@auth0/auth0-react";
import { useContext, useState, useEffect } from "react";
import GameContext from "../context/GameContext";

const Fetching = () => {
  const { user } = useAuth0();

  const { setGame } = useContext(GameContext);

  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const fetchCat = async () => {
      try {
        const proxyUrl = "https://kitsit-api.herokuapp.com/cats";
        // const proxyUrl = "http://localhost:8000/cats";
        const config = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ownerId: user.sub,
          }),
        };
        const res = await fetch(proxyUrl, config);
        const json = await res.json();
        const savedCat = json.cat;
        setProgress(100);
        if (savedCat) {
          setGame({
            type: "END_FETCH",
            data: savedCat,
          });
        } else {
          setGame({
            type: "END_FETCH",
            data: null,
          });
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
