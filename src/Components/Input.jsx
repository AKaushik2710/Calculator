import { useRef } from "react";

export default function Input(){
    const myRef = useRef("");
    return <input type="text" ref={myRef} onChange={(e)=>{
        myRef.current=e.target.value;
        console.log(myRef.current)
    }}/>
}