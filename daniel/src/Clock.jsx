import { useContext } from "react";

export function Clock(){
      
    function OnShowTime(){
        const now = new Date()
       const language = useContext(LanguageContext)
       
    if(language === 'en') {
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
