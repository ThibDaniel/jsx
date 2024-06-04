export function Clock(){
    function OnShowTime(){
    const now = new Date() 
    alert(`the current time is ${now.toLocaleTimeString()}`); 
};
    return (
        <div>
            <button onClick={OnShowTime}>Click me!</button>
        </div>
    )
}