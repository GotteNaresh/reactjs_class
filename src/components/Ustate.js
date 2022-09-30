import React,{useState} from 'react';

const Ustate = () => {
    const name ='DHONI'
    const[name1,setName]=useState('name')
    const handleClick=()=>setName('cool captain')
        
    
  return (
    <>
        <div>{name1}</div><br/>
        <button onClick={handleClick}>
        CLICK HERE
        </button>
    
    </>
  )
}

export default Ustate;
