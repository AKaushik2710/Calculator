import { useRef } from "react";

export default function Input(){
    const myRef = useRef("");
    return <input type="text" ref={myRef} />
}