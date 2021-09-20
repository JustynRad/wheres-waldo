//Rock Level
import Rock from "./assets/pokelevels/rockLevel.jpeg";
//Grass Level
import Grass from "./assets/pokelevels/grassLevel.jpeg";
//Electric Level
import Electric from "./assets/pokelevels/electricLevel.jpeg";
//Fair Level
import Fair from "./assets/pokelevels/fairLevel.jpeg";

const pokeLevels = {
    0: {
        level: 0,
        name: "Rock",
        mapLevel: Rock,
        pokemons: [
            {
                name: "Gengar",
                found: false,
                xCoord: 76,
                yCoord: 48,
            },
            {
                name: "Magnemite",
                found: false,
                xCoord: 39,
                yCoord: 58,
            },
            {
                name: "Growlithe",
                found: false,
                xCoord: 74,
                yCoord: 60,
            },
        ],
    },
    1: {
        level: 1,
        name: "Grass",
        mapLevel: Grass,
        pokemons: [
            {
                name: "Golbat",
                found: false,
                xCoord: 76,
                yCoord: 48,
            },
            {
                name: "Shellder",
                found: false,
                xCoord: 39,
                yCoord: 58,
            },
            {
                name: "Magikarp",
                found: false,
                xCoord: 74,
                yCoord: 60,
            },
        ],
    },
    2: {
        level: 2,
        name: "Electric",
        mapLevel: Electric,
        pokemons: [
            {
                name: "Scyther",
                found: false,
                xCoord: 76,
                yCoord: 48,
            },
            {
                name: "Oddish",
                found: false,
                xCoord: 39,
                yCoord: 58,
            },
            {
                name: "Dragonair",
                found: false,
                xCoord: 74,
                yCoord: 60,
            },
        ],
    },
    3: {
        level: 3,
        name: "Fair",
        mapLevel: Fair,
        pokemons: [
            {
                name: "Pikachu",
                found: false,
                xCoord: 76,
                yCoord: 48,
            },
            {
                name: "Clefairy",
                found: false,
                xCoord: 39,
                yCoord: 58,
            },
            {
                name: "Squirtle",
                found: false,
                xCoord: 74,
                yCoord: 60,
            },
        ],
    },
};

export default pokeLevels;
