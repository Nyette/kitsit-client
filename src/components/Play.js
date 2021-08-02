import { useAuth0 } from "@auth0/auth0-react";
import { useContext, useState, useEffect } from "react";
import GameContext from "../context/GameContext";
import { Stage, Sprite, Text } from "@inlet/react-pixi";
import idle from "../assets/black-marks10.png";

const Play = () => {
  // eslint-disable-next-line
  const { user } = useAuth0();
  // eslint-disable-next-line
  const { game, setGame } = useContext(GameContext);
  // eslint-disable-next-line
  const [catX, setCatX] = useState(400);
  // eslint-disable-next-line
  const [catY, setCatY] = useState(300);
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (message) {
      const id = setTimeout(() => {
        setMessage("");
      }, 2000);
      return () => clearTimeout(id);
    }
  }, [message]);

  const handleClick = () => {
    setMessage("You pet your cat!");
  };

  const renderCat = () => {
    return (
      <Sprite
        image={idle}
        anchor={(0, -0.1)}
        scale={{ x: 0.5, y: 0.5 }}
        x={catX}
        y={catY}
        interactive={true}
        click={handleClick}
      />
    );
  };

  return (
    <div className="play">
      <Stage
        options={{
          backgroundAlpha: 0,
          roundPixels: true,
          resizeTo: document.querySelector(".play"),
        }}
      >
        {renderCat()}
        <Text text={message} anchor={(1, -1.5)} />
      </Stage>
    </div>
  );
};

export default Play;
