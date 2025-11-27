import { useState } from "react";
import './Color.css'

const Color = () => {
    const[color, setColor] = useState("#9c3e3e")
    const handleChange = (e) => {
        setColor(e.target.value)

    };

    return(
        <div className="container">
            <h1>Color Picker</h1>
            <div className="color_display" style={{backgroundColor: color}}>
            <p>The Tech world is such an amazing place to be {color}</p>
            </div>
            <label> Select a color:</label>
            <input
            type="color"
            value={color}
            onChange={handleChange}
            />
            
        </div>
    )
};



export default Color;