import React from "react";
import Box from "./Box";


function Row (prop){
//Will be combination of boxes


return(

    <div>
        <Box btn={prop.indices[0]} val={prop.val} setBtn={prop.setVal} turn={prop.turn} setTurn={prop.setTurn} playerOne={prop.playerOne} setPlayerOne={prop.setPlayerOne} playerTwo={prop.playerTwo} setPlayerTwo={prop.setPlayerTwo} />
        <Box btn={prop.indices[1]} val={prop.val} setBtn={prop.setVal} turn={prop.turn} setTurn={prop.setTurn} playerOne={prop.playerOne} setPlayerOne={prop.setPlayerOne} playerTwo={prop.playerTwo} setPlayerTwo={prop.setPlayerTwo} />
        <Box btn={prop.indices[2]} val={prop.val} setBtn={prop.setVal} turn={prop.turn} setTurn={prop.setTurn} playerOne={prop.playerOne} setPlayerOne={prop.setPlayerOne} playerTwo={prop.playerTwo} setPlayerTwo={prop.setPlayerTwo} />
    
       
        
    </div>

)

}

export default Row