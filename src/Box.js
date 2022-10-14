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
    const playerOneCopy = prop.playerOne.slice();
    const playerTwoCopy = prop.playerTwo.slice();

    console.log('board', prop.val);
    //if value = - then change to X
    if(prop.val[prop.btn] === '-' &&  prop.turn % 2 !== 0) {
        //mutate the copy
        //copy = ['-','-','-','-','-','-','-','-','-']
        copy[prop.btn] = 'X'
        playerOneCopy.push(prop.btn)

        prop.setTurn(prop.turn + 1)
        //pass copy into setBtn
        
        prop.setBtn(copy)

        prop.setPlayerOne(playerOneCopy)
        
        if(playerOneCopy.length >= 3) isWinner(copy)
    }
    //if value = X then change to O
    if(prop.val[prop.btn] === '-' && prop.turn % 2 === 0){
    
        copy[prop.btn] = 'O'
        playerTwoCopy.push(prop.btn)

        //pass copy into setBtn
        prop.setTurn(prop.turn + 1)

        prop.setBtn(copy)

        prop.setPlayerTwo(playerTwoCopy)

        if(playerTwoCopy.length >= 3) isWinner(copy)
    }


    function isWinner (arr){
    // playerOne: [0, 4, 2, 1, 7], Example solution: 0, 1 , 2
    // if(arr.includes(0) && arr.includes(1) && arr.includes(2))

    // console.log(JSON.stringify(arr));
    
    // arr = arr.sort((a,b) => a-b)

    // let i = 0 ; 

    // if(JSON.stringify([arr[i],arr[i+1],arr[i+2]]) === JSON.stringify([0,1,2])) return alert('You Won!')
    // if(JSON.stringify([arr[i],arr[i+1],arr[i+2]]) === JSON.stringify([3,4,5])) return alert('You Won!')
    // if(JSON.stringify([arr[i],arr[i+1],arr[i+2]]) === JSON.stringify([6,7,8])) return alert('You Won!')
    // if(JSON.stringify([arr[i],arr[i+1],arr[i+2]]) === JSON.stringify([0,3,6])) return alert('You Won!')
    // if(JSON.stringify([arr[i],arr[i+1],arr[i+2]]) === JSON.stringify([1,4,7])) return alert('You Won!')
    // if(JSON.stringify([arr[i],arr[i+1],arr[i+2]]) === JSON.stringify([2,5,8])) return alert('You Won!')
    // if(JSON.stringify([arr[i],arr[i+1],arr[i+2]]) === JSON.stringify([0,4,8])) return alert('You Won!')
    // if(JSON.stringify([arr[i],arr[i+1],arr[i+2]]) === JSON.stringify([2,4,8])) return alert('You Won!')

    
    // sort the arr, compare every number in arr to possible winners 

    if(checkVictory(arr, 'X')) return alert('You Won!');
    if(checkVictory(arr, 'O')) return alert('You Won!');

       
    }
   }

   function checkVictory(board, sign) {

     /*
      arr(index) = [
        0, 1, 2,
        3, 4, 5,
        6, 7, 8
      ]
    */


     //horizontal
     if(board[0] === sign && board[1] === sign && board[2] === sign) return true;
     if(board[3] === sign && board[4] === sign && board[5] === sign) return true;
     if(board[6] === sign && board[7] === sign && board[8] === sign) return true;

     //vertical
     if(board[0] === sign && board[3] === sign && board[6] === sign) return true;
     if(board[1] === sign && board[4] === sign && board[7] === sign) return true;
     if(board[2] === sign && board[5] === sign && board[8] === sign) return true;

     //diagonal
     if(board[0] === sign && board[4] === sign && board[8] === sign) return true;
     if(board[2] === sign && board[4] === sign && board[6] === sign) return true;

     //none
     return false;
   }

return(

    <button className='box' id={prop.btn} onClick={()=>xo(document.getElementById(prop.btn))}>{prop.val[prop.btn]}</button>

)
    

}

export default Box