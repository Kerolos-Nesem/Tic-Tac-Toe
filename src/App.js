import React, {useState} from 'react';
import Row from './Row';
import Player from './Player';
import './style.css'


function App (){

    const [val,setVal] = useState(['-','-','-','-','-','-','-','-','-'])
    
    const [playerOne, setPlayerOne] = useState([])

    const [playerTwo, setPlayerTwo] = useState([])
    
    const [turn,setTurn] = useState(1)

    return(
        <div className='app'>
            <h1>Tic-Tac-toe</h1>

            <Player turn={turn} num={1}/>
            <Player turn={turn + 1} num={2}/>
            
            <Row indices={[0,1,2]} val={val} setVal={setVal} turn={turn} setTurn={setTurn} playerOne={playerOne} setPlayerOne={setPlayerOne} playerTwo={playerTwo} setPlayerTwo={setPlayerTwo} />
            <Row indices={[3,4,5]} val={val} setVal={setVal} turn={turn} setTurn={setTurn} playerOne={playerOne} setPlayerOne={setPlayerOne} playerTwo={playerTwo} setPlayerTwo={setPlayerTwo} />
            <Row indices={[6,7,8]} val={val} setVal={setVal} turn={turn} setTurn={setTurn} playerOne={playerOne} setPlayerOne={setPlayerOne} playerTwo={playerTwo} setPlayerTwo={setPlayerTwo} />
           
            

        </div>
    )

}

export default App