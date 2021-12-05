import { useContext, useState } from "react";
import GameContext from "../context/GameContext";

const Create = () => {
  const { setGame } = useContext(GameContext);

  const [name, setName] = useState("");

  const [furPattern, setFurPattern] = useState("black-marks");

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleFurPattern = (e) => {
    setFurPattern(e.target.alt);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name !== "") {
      const newCat = {
        name: name,
        furPattern: furPattern,
        happiness: 65,
      };
      setGame({
        type: "END_FETCH",
        data: newCat,
      });
    }
  };

  return (
    <div className="create">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Give your kitty a name"
          id="name"
          name="name"
          value={name}
          onChange={handleName}
        />

        <div id="furPattern" className="container">
          <div className="row">
            <div className="col-sm-6">
              <img
                onClick={handleFurPattern}
                src={require("../assets/black-marks10.png").default}
                alt="black-marks"
              />
            </div>
            <div className="col-sm-6">
              <img
                onClick={handleFurPattern}
                src={require("../assets/white-lucky-brown10.png").default}
                alt="white-lucky-brown"
              />
            </div>
          </div>
        </div>

        <button className="btn btn-dark btn-lg" type="submit">
          Go
        </button>
      </form>
    </div>
  );
};

export default Create;
