import { useContext } from "react";
import GameContext from "./GameContext";

const Settings = () => {

  const { setGame } = useContext(GameContext);
  
  return (
    <div className="container">
      <h1>Settings</h1>
      <button className="btn btn-primary" onClick={() => setGame({ type: "RETURN_TO_MAIN_MENU" })}>
        Return To Main Menu
      </button>
    </div>
  );
}

export default Settings;