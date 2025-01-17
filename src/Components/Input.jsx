import { useContext, useState } from 'react';
import { Context } from './Context.jsx';

export default function Input(props){
    const {egRef} = props;
    const [result, setResult] = useState(egRef.current);
    function handleResult(value){
        handleClick(value,true);
        setResult(egRef.current.value);
    }
    
    function handleKeyPress(event) {
        const allowedKeys = /[0-9+\-*/%]/;
        if (!allowedKeys.test(event.key)) {
            event.preventDefault();
        }
    }

    const handleClick = useContext(Context);
    return <input type="text" pattern="[0-9+*-/%]" ref={egRef} value={result} onChange={(e)=>handleResult(e.target.value)} onKeyDown={handleKeyPress} />    
}
