import { useState } from "react"
import { LocationFetcher } from "./LocationFetcher"

export function ButtonLoc() {
    const [enable, setEnable] = useState(false)
    const [buttonClicked, setButtonClicked] = useState(false);

    const handleClick = () => {
        setEnable(!enable)
        setButtonClicked(true); 
      };


    return(
        <div>
            <button style={{
  width: '100%',
  height: '40px',
  background: '#fff',
  border: 'none',
  outline: 'none',
  
  boxShadow: '0 0 10px rgba(255, 255, 255, 0.1)',
}}  onClick={handleClick}>Localização</button>
            <LocationFetcher clicked = {buttonClicked} enable = {enable} />
        </div>
    )

}
