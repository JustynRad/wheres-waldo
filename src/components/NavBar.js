import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import Pokemon from "../Pokemon";

const Navbar = ({
    inGame,
    setInGame,
    pokemons,
    inLeaderboard,
    inHome,
    inInfo,
}) => {
    let pokemonInGame;

    pokemonInGame = pokemons.map((pokemon) => {
        return (
            <Pokemon
                name={pokemon.name}
                found={pokemon.found}
                key={pokemon.name}
            />
        );
    });

    return (
        <div classname="navbar">
            {inHome === true && (
                <>
                    <div className="nav-button-container">
                        <Link style={{ color: "#FFF" }} to="/leaderboard">
                            <button className="left-nav-button nav-button">
                                <span className="nav-button-span">Leaderboard</span>
                            </button>
                        </Link>
                    </div>
                    <h1>Let's Find Pokemon!</h1>
                    <div className="nav-button-container">
                        <Link style={{ color: "FFF"}} to="/info">
                            <button className="right-nav-button nav-button">
                                <span className="nav-button-span">Info</span>
                            </button>
                        </Link>
                    </div>
                </>
            )}
            {inGame === true && (
                <>
                    <div className="nav-button-container">
                        <Link style={{ color: "#FFF" }} to="/">
                        <button className="left-nav-button nav-button">
                            <span className="nav-button-span">Home</span>
                            {/* <HomeIcon className="nav-button-icon" /> */}
                        </button>
                        </Link>
                    </div>

                    <div className="nav-container">{pokemonInGame}</div>

                    <div className="nav-button-container nav-button-container-empty"></div>
                </>
        )}
        </div>
    )
};

export default Navbar;