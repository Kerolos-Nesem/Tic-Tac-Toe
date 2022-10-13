import React from "react";
import Box from "./Box";


function Row (prop){
//Will be combination of boxes


return(

    <div>
        <Box btn={prop.indices[0]} val={prop.val} setBtn={prop.setVal} /*count={prop.count} setCount={prop.setCount}*/ />
        <Box btn={prop.indices[1]} val={prop.val} setBtn={prop.setVal} /*count={prop.count} setCount={prop.setCount}*/ />
        <Box btn={prop.indices[2]} val={prop.val} setBtn={prop.setVal} /*count={prop.count} setCount={prop.setCount}*/ />
    </div>

)

}

export default Row