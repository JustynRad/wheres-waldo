import React from "react";
import LevelCard from "../components/LevelCard";
import { Link } from "react-router-dom";

const Home = ({
    setLevel,
    levelData = {},
    setInGame,
    setInLeaderboard,
    setInHome,
    setInInfo,
}) => {
    setInLeaderboard(false);
    setInHome(true);
    setInGame(false);
    setInInfo(false);

    const links = Object.keys(levelData)?.map((number) => {
        const link = levelData[number];
        const pokemons = link.pokemons;
        const key = `level ${link.level} ${link.name}`;

        return (
            <Link to="/game" key={key}>
                <LevelCard
                    img={link.mapLevel}
                    clicked={() => {
                        setLevel(link.level);
                        setInGame(true);
                    }}
                    alt={`Level ${link.level}`}
                    {...pokemons}
                >
                    {link.name}
                </LevelCard>
            </Link>
        );
    });
    
    return <div className="home-levels-containers">{links}</div>;
};

export default Home;