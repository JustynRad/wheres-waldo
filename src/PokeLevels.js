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
                xCoord: 36,
                yCoord: 53,
            },
            {
                name: "Magnemite",
                found: false,
                xCoord: 31,
                yCoord: 9,
            },
            {
                name: "Growlithe",
                found: false,
                xCoord: 51,
                yCoord: 59,
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
                xCoord: 65,
                yCoord: 25,
            },
            {
                name: "Shellder",
                found: false,
                xCoord: 27,
                yCoord: 94,
            },
            {
                name: "Magikarp",
                found: false,
                xCoord: 45,
                yCoord: 2,
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
                xCoord: 56,
                yCoord: 23,
            },
            {
                name: "Oddish",
                found: false,
                xCoord: 86,
                yCoord: 92,
            },
            {
                name: "Dragonair",
                found: false,
                xCoord: 36,
                yCoord: 20,
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
                xCoord: 92,
                yCoord: 68,
            },
            {
                name: "Clefairy",
                found: false,
                xCoord: 24,
                yCoord: 31,
            },
            {
                name: "Squirtle",
                found: false,
                xCoord: 26,
                yCoord: 66,
            },
        ],
    },
};

export default pokeLevels;
