import React, {useState} from 'react';
import Row from './Row';
import './style.css'


function App (){
    
    const [val,setVal] = useState(['-','-','-','-','-','-','-','-','-'])
    // const [count,setCount] = useState(0)
    

    return(
        <div className='app'>
            <h1>Tic-Tac-toe</h1>
            
            <Row indices={[0,1,2]} val={val} setVal={setVal}  /*count={count} setCount={setCount}*/ />
            <Row indices={[3,4,5]} val={val} setVal={setVal}  /*count={count} setCount={setCount}*/ />
            <Row indices={[6,7,8]} val={val} setVal={setVal}  /*count={count} setCount={setCount}*/ />

        </div>
    )

}

export default App