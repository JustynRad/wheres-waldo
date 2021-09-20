import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/NavBar"
import Home from "./pages/Home";
import Game from "./pages/Game";
import pokeLevels from "./PokeLevels";
import "./App.css";

function App() {

  const [inGame, setInGame] = useState(false);
  const [inLeaderBoard, setInLeaderBoard] = useState(false);
  const [inHome, setInHome] = useState(false);
  const [inInfo, setInInfo] = useState(false);
  const [level, setLevel] = useState(0);
  const [levelData, setLevelData] = useState(pokeLevels);
  const [pokemons, setPokemons] = useState([]);
  const [username, setUsername] = useState("");
  const handleUpdateUsername = (e) => {
    setUsername(e.target.value);
  };

  return (
    <Router basename="/lets-find-pokemon">
      <Navbar
        inGame={inGame}
        setInGame={setInGame}
        pokemons={pokemons}
        inLeaderBoard={inLeaderBoard}
        inHome={inHome}
        inInfo={inInfo}
      />
      <div className="container">
        <Switch>
          <Route exact path="/" component={Home}>
            <Home
              setLevel={setLevel}
              levelData={levelData}
              setInGame={setInGame}
              setInLeaderboard={setInLeaderBoard}
              setInHome={setInHome}
              setInInfo={setInInfo}
            />
          </Route>
          <Route exact path="/game" component={Game}>
              <Game
                level={level}
                username={username}
                updateUsername={handleUpdateUsername}
                levelData={levelData}
                pokemons={pokemons}
                setPokemons={setPokemons}
                setInLeaderBoard={setInLeaderBoard}
                setInHome={setInHome}
                setInInfo={setInInfo}
              />
            </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
