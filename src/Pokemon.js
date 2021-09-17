import React from "react";

//Rock Level
import Gengar from "./assets/pokemon/gengar.png";
import Magnemite from "./assets/pokemon/magnemite.png";
import Growlithe from "./assets/pokemon/growlithe.png";

//Grass Level
import Golbat from "./assets/pokemon/golbat.png";
import Shellder from "./assets/pokemon/shellder.png";
import Magikarp from "./assets/pokemon/magikarp.png";

//Electric Level
import Scyther from "./assets/pokemon/scyther.png";
import Oddish from "./assets/pokemon/oddish.png";
import Dragonair from "./assets/pokemon/dragonair.png";

//Fair Level
import Pikachu from "./assets/pokemon/pikachu.png";
import Clefairy from "./assets/pokemon/clefairy.png";
import Squirtle from "./assets/pokemon/squirtle.png";

const Pokemon = (props) => {
    let image = null;

    switch (props.name) {
        case "Gengar":
            image: Gengar;
            break;
        case "Magnemite":
            image: Magnemite;
            break;
        case "Growlithe":
            image: Growlithe;
            break;
        case "Golbat":
            image: Golbat;
            break;
        case "Shellder":
            image: Shellder;
            break;
        case "Magikarp":
            image: Magikarp;
            break;
        case "Scyther":
            image: Scyther;
            break;
        case "Oddish":
            image: Oddish;
            break;
        case "Dragonair":
            image: Dragonair;
            break;
        case "Pikachu":
            image: Pikachu;
            break;
        case "Clefairy":
            image: Clefairy;
            break;
        case "Squirtle":
            image: Squirtle;
            break;
        default:
            break;
    }

};

export default Pokemon;