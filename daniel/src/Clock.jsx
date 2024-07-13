import { useContext } from "react";
import { LanguageContext } from "./LanguageContext";

export function Clock() {

    const OnShowTime = () =>  {
        const now = new Date()
        const language = useContext(LanguageContext)
        console.info("language")
        if (language === 'en') {
            alert(`the current time is ${now.toLocaleTimeString()}`);
        } else {
            alert(`l'ora corrente è ${now.toLocaleTimeString()}`)
        }

    };
    return (
        <div>
            <button onClick={OnShowTime}>Click me!</button>
        </div>
    )
}
