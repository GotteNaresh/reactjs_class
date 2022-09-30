import React, { useState } from "react";
const IncreamentComponent = () => {
    const [counter, setCouter] = useState(0);
    const increamentHandler = () => {
        setCouter(counter + 1);
    }
    const decreamentHandler = () => {
        let result = counter -1;
        if(result >= 0) {
            setCouter(result);
        } else {
            //
        }
        
    }
    return(
        <>
        <h2>counter : {counter}</h2>
        <button onClick={increamentHandler}>ADD(+)</button>
        <button onClick={decreamentHandler}>Delete(-)</button>
        </>
    )
};
export default IncreamentComponent;