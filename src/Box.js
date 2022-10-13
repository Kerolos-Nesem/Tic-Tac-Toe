import React from "react";

// [1,2,3] - old state

// [1,2,3] - copy

// [1, 2, 3] -> [1 , 2, 4] mutated copy, old state -> [1,2,3]

//set mutated copy as new state


function Box (prop){
/* 000
   000
   000 */

function xo (a){

    const copy = prop.val.slice();
    //if value = - then change to X
    if(prop.val[prop.btn] === '-') {
        //mutate the copy
        //copy = ['-','-','-','-','-','-','-','-','-']
        copy[prop.btn] = 'X'
        //pass copy into setBtn
        prop.setBtn(copy)
    }
    //if value = X then change to O
    if(prop.val[prop.btn] === 'X'){
    
        copy[prop.btn] = 'O'
        //pass copy into setBtn
        prop.setBtn(copy)
    
    }
        //if value = O then change to X
    if(prop.val[prop.btn] === 'O'){
        copy[prop.btn] = 'X'
        //pass copy into setBtn
        prop.setBtn(copy)
    
    }
   }

return(

    <button className='box' id={prop.btn} onClick={()=>xo(document.getElementById(prop.btn))}>{prop.val[prop.btn]}</button>

)
    

}

export default Box