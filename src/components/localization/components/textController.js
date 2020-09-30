import {useContext} from "react";
import {LanguageContext} from "../localContexApi/localContext";

export function TextController({tid}) {
    const language = useContext(LanguageContext)
    return language.dictionary[tid] || tid;
}
