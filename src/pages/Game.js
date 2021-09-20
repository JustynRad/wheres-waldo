import React, { useEffect, useState } from "react";
import { firestore } from "../firebase";
import { collection, addDoc } from "firebase/firestore"; 
import OutsideClickHandler from "react-outside-click-handler";
import PokeDropdown from "../components/PokeDropDown";
import pokeLevels from "../PokeLevels";

const Game = ({
    level,
    levelData={},
    username,
    updateUsername,
    pokemons,
    setPokemons,
    setInLeaderBoard,
    setInHome,
    setInInfo,
}) => {

    const [gameID, setGameID] = useState(null);
    const [image, setImage] = useState("");
    const [gameOver, setGameOver] = useState(false);
    const [coords, setCoords] = useState(null);
    const [clickLocation, setClickLocation] = useState({left: "0%", top: "0%"});
    const [showDropdown, setShowDropdown] = useState(false);
    const [startTime, setStartTime] = useState(Date.now());
    const [elapsedSeconds, setElapsedSeconds] = useState(null);

    setInLeaderBoard(false);
    setInHome(false);
    setInInfo(false);

    useEffect(() => {
        let loadedPokemons = pokeLevels[level].pokemons;
        setImage(pokeLevels[level].mapLevel);
        setPokemons(loadedPokemons);
      }, [level, levelData]);

    useEffect(() => {
        setGameOver(pokemons?.every((pokemon) => pokemon.found));
    }, [pokemons]);

    useEffect(() => {
        if (gameOver === true) {
            let endingTimeStamp = Date.now();
            let score = (endingTimeStamp - startTime) / 1000;
            let date = new Date().toString().split(" ").splice(1,3).join(" ");
            if (score < 0.1) {
                return;
            }
            firestore
                .collection("games")
                .add({
                    startTime: startTime,
                    endTime: endingTimeStamp,
                    level,
                    pokemons: pokemons,
                    elapsedSeconds: score,
                    date: date,
                })
                .then((docRef) => {
                    setGameID(docRef.id);
                    firestore
                        .collection("games")
                        .doc(docRef.id)
                        .onSnapshot((doc) => {
                            const data = doc.data();
                            setElapsedSeconds(data?.elapsedSeconds);
                        });
                });
        }
    }, [gameOver]);

    const getLocationImageClick = (e) => {
        const xCoord = Math.round(
            (e.nativeEvent.offsetX / e.nativeEvent.target.offsetWidth) * 100
        );
        const yCoord = Math.round(
            (e.nativeEvent.offsetY / e.nativeEvent.target.offsetHeight) * 100
        );
        const coords = { xCoord, yCoord };
        return coords;
    }

    const updateClickLocation = (coords) => {
        const { xCoord, yCoord } = coords;
        const updatedCoords = { left: xCoord + "%", top: yCoord + "%"};
        setClickLocation(updatedCoords);
        setShowDropdown(true);
    };

    const imageClick = (e) => {
        const coords = getLocationImageClick(e);
        setCoords(coords);
        updateClickLocation(coords);
    };

    const isCoordsWithinTwoDegrees = (coord1, coord2) => {
        return (
            coord1 === coord2 ||
            coord1 + 1 === coord2 ||
            coord1 + 2 === coord2 ||
            coord1 - 1 === coord2 ||
            coord1 - 2 === coord2
        );
    };

    const hideDropdown = () => setShowDropdown(false);

    const dropdownClick = (pokemon) => {
        const levelSelect = { coords, pokemon, gameID, level };

        const selectedPokemon = pokemons.find((poke) => {
            return poke.name === pokemon;
        });

        const { xCoord, yCoord } = selectedPokemon;

        const isPokemonAtCoords =
            isCoordsWithinTwoDegrees(xCoord, coords.xCoord) &&
            isCoordsWithinTwoDegrees(yCoord, coords.yCoord);
        
        if (isPokemonAtCoords) {
            const updatedPokemons = pokemons.map((poke) => 
                poke.name === pokemon ? {...poke, found: true } : poke
            );
            console.log("POKEMON FOUND");
            setPokemons(updatedPokemons);
        }

        firestore.collection("playerSelection").add(levelSelect);
        hideDropdown();
    }

    const submitScore = async () => {
        const highScoreRef = await firestore.collection("games").doc(gameID).get();
        const highScoreData = highScoreRef.data();
        const newHighScore = {
            gameID,
            level: highScoreData.level,
            time: highScoreData.elapsedSeconds,
            name: username,
            date: highScoreData.date,
        };
        firestore.collection("highscores").add(newHighScore);
    };

    return (
        <div className="game-core">
            <div className="relative">
                <OutsideClickHandler onOutsideClick={hideDropdown}>
                    <img
                        className="game-level-image"
                        src={image}
                        alt="Game Level"
                        onClick={imageClick}
                    />
                    <PokeDropdown
                        show={showDropdown}
                        pokemons={pokemons}
                        clickLocation={clickLocation}
                        clicked={dropdownClick}
                    />
                </OutsideClickHandler>
            </div>

        </div>
    )
};

export default Game;