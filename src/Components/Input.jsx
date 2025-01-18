import { useContext, useState } from 'react';
import { Context } from './Context.jsx';

export default function Input(props){
    const {egRef, input, handleInput} = props;
    // const [input, setInput] = useState(egRef.current);
    
    function handleKeyPress(event) {
        const allowedKeys = /[0-9+\-*/%]/;
        if (!allowedKeys.test(event.key)) {
            event.preventDefault();
        }
    }

    const handleClick = useContext(Context);
    return <input type="text" pattern="[0-9+*-/%]" ref={egRef} value={input} onChange={(e)=>handleInput(e.target.value, true)} onKeyDown={handleKeyPress} />    
}
