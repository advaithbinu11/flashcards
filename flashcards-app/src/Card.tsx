import React, { useState } from "react"
function Card(){
    const [term ,  setTerm] = useState("Pikachu");
    const [definition, setDefinition] = useState("yellow");
    const [curr, setCurr] = useState(term);
    const [flipState, setFlipState ] = useState("Term");
    return (
        <div style = {{textAlign: "center", marginTop: "0px"}}>
            <h2>{flipState}</h2>
            <button onClick = {()=>{
                if (curr == term){
                    setCurr(definition)
                    setFlipState("Definition")
                }
                else{
                    setCurr(term)
                    setFlipState("Term")
                }
            }}>{curr}</button>
        </div>
    )
}

export default Card;
