import React from "react";
import PokeDropDownOption from "./PokeDropDownOption";

//Rock Level
import Gengar from "../assets/pokemon/gengar.png";
import Magnemite from "../assets/pokemon/magnemite.png";
import Growlithe from "../assets/pokemon/growlithe.png";

//Grass Level
import Golbat from "../assets/pokemon/golbat.png";
import Shellder from "../assets/pokemon/shellder.png";
import Magikarp from "../assets/pokemon/magikarp.png";

//Electric Level
import Scyther from "../assets/pokemon/scyther.png";
import Oddish from "../assets/pokemon/oddish.png";
import Dragonair from "../assets/pokemon/dragonair.png";

//Fair Level
import Pikachu from "../assets/pokemon/pikachu.png";
import Clefairy from "../assets/pokemon/clefairy.png";
import Squirtle from "../assets/pokemon/squirtle.png";


const PokeDropDown = ({
    pokemons = [],
    show,
    clickLocation,
    clicked,
}) => {
    const getPokeImage = (pokemon) => {
        switch (pokemon) {
            //Rock Level
            case "Gengar":
                return Gengar;
            case "Magnemite":
                return Magnemite;
            case "Growlithe":
                return Growlithe;
            //Grass Level    
            case "Golbat":
                return Golbat;
            case "Shellder":
                return Shellder;
            case "Magikarp":
                return Magikarp;
            //Electric Level    
            case "Scyther":
                return Scyther;
            case "Oddish":
                return Oddish;
            case "Dragonair":
                return Dragonair; 
            //Fair Level    
            case "Pikachu":
                return Pikachu;
            case "Clefairy":
                return Clefairy;
            case "Squirtle":
                return Squirtle;
            default:
                break;
        }
    };

    const PokeDropDownOptions = () => {
        return pokemons.map((pokemon) => {
            return (
                <PokeDropDownOption
                    image={getPokeImage(pokemon.name)}
                    title={pokemon.name}
                    clicked={clicked}
                />
            );
        });
    };

    return (
        <div className={`${show ? "absolute" : "hidden"}`} style={clickLocation}>
            <div
                className="poke-dropdown-menu"
                role="menu"
                aria-orientation="vertical"
                aria-aria-labelledby="options-menu"
            >
                <PokeDropDownOptions />
            </div>
        </div>
    )
};

export default PokeDropDown;