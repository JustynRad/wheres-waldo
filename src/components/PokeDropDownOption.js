import React from "react";

const PokeDropDownOption = (props) => {
    return (
        <a 
            key={props.title} 
            href="#menuitem" 
            className="poke-dropdown-option"
            onClick={() => props.clicked(props.title)}
            role="menuitem"
        >
            <div className="poke-dropdown-container">
                <img 
                    className="poke-dropdown-img"
                    src={props.image}
                    alt={props.title}
                />
                <div>{props.title}</div>
            </div>
        </a>
    )
};

export default PokeDropDownOption;