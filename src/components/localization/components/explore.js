import React, {useContext, useState} from "react";
import {LanguageContext} from "../localContexApi/localContext";
import {TextController} from "./textController";

export default function Explore() {
    const [clickText, setClickText] = useState();
    const { dictionary } = useContext(LanguageContext);

    const handleClick = () => {
        setClickText(<TextController tid="buttonClicked" />);
    }

    return (
        <div>
            <h1><TextController tid="exploreHeader" /></h1>
            <p><TextController tid="welcomeDescription" /></p>

            <div>
                <input type="text" placeholder={dictionary.en} />
                <button onClick={handleClick}>
                    <TextController tid="clickMe" />
                </button>
                <p>{clickText}</p>
            </div>

            <a href="https://halilcanozcelik.com" target="_blank" rel="noopener noreferrer">
                <TextController tid="aboutMe" />
            </a>
        </div>
    );
}
