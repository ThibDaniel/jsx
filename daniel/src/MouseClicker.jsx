export const MouseClicker = () => {
    function handleButtonClick(e) {
      console.log("Image source: ",e.target.src)
    }
    return(
        <div>
            <button name="Daniel" onClick={handleButtonClick} ><img height={48} width={48} src="Sondi-desktop-tramonti-28.jpg"></img></button>
        </div>
    )
}