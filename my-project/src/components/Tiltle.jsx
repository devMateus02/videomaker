import React from "react";

function Tiltle(props){
    return (
        <h2 data-aos='fade-down'  className="inline-block relative text-2xl font-medium max-w-[100%]  before:absolute before:content-['']  before:w-[45%] before:h-[2px] before:top-[75%] before:left-[25%] before:bg-amber-500 p-6" style={{color:props.color, fontSize: props.font
        }}>{props.name}</h2>
    )
}


export default Tiltle