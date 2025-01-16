import { useRef } from "react";

const myRef = useRef("");
export default function Input(){
    return <input type="text" ref={myRef} onChange={(e)=>handleInput(e.target.value)}/>
}

function handleInput(value){
    myRef.current = value;
}

export {handleInput}