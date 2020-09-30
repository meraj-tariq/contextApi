import React, {createContext, useState} from "react";
import {dictionaryList, languageOptions} from "../languages";

//create the language context with default selected language
export const LanguageContext = createContext({
    userLanguage: 'en',
    dictionary: dictionaryList.en
});

export const LanguageProvider = ({children}) =>{
    const [userLanguage, setUserLanguage] = useState('en');

    const provider = {
        userLanguage,
        dictionary: dictionaryList[userLanguage],
        userLanguageChange: selected =>{
            const newLanguage = languageOptions[selected] ? selected : 'en'
            setUserLanguage(newLanguage);
            window.localStorage.setItem('rcml-lang', newLanguage)
        }
    };

    return(
        <LanguageContext.Provider value={provider}>
            {children}
        </LanguageContext.Provider>
    )
};
