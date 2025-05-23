import React, { useState } from 'react'
import "./style.css"

const Color_Toggler = () => {
  
    const[backgroundColor,setBackgroundColor] = useState("#ffffff");
    const[textColor, setTextColor] = useState("#1b1b1b");
    const[buttonStyle, setButtonStyle] = useState("#ffffff");
  
   const handlClick = () => {
    setBackgroundColor(backgroundColor === "#ffffff"?"#1b1b1b":"#ffffff");
    setTextColor(textColor === "#1b1b1b" ? "#ffa31a" : "#1b1b1b");
    setButtonStyle(backgroundColor === "white" ? "#1b1b1b" : "white");
   }


    return (
    <>
   <section style={{backgroundColor,color:textColor}}>
   <button
    onClick={handlClick}
    style={{
        backgroundColor:buttonStyle,
        color: textColor,
        border: `2px solid ${textColor}`,
      }}
   >
    {backgroundColor === "#ffffff" ?  "Black Theme" : "White Theme" }
    </button>

    <section className="content">
        <h1>
          Welcome To A <br /> Rijans World..
        </h1>
      </section>

   </section>
    </>
  )
}

export default Color_Toggler