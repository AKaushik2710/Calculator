import '../App.css'
import { useContext, useState } from 'react';
import { Context } from './Context.jsx';

function Buttons({count}) {
    const arr = [];
    const handleClick = useContext(Context);
    for (let i = 1; i <= count; i++) {
        arr.push(i);
    }
    return (
        <>
            {arr.map((x, index) => (
                <button key={index} onClick={()=>handleClick(x)}>{x}</button>
            ))}
        </>
    );
}

function Button(props){
    const {children, oprt,egRef, stateVal, stateSetter, handleInput} = props;
    const handleClick = useContext(Context);
    const initialResult = {
        history:[],
        characters:[]
    };
    const [result, setResult] = useState(initialResult);
    
    function handleOperations(e){
        if(oprt){
            stateSetter(()=>false);
            handleClick(children);
        }
        else{
            const current = egRef.current.value;
            switch (e.target.value){
                case "=":
                    try {
                        egRef.current.value = current ? eval(current) : 0;
                        setResult({...result, history : [...result.history, egRef.current.value]});
                        stateSetter(true);
                    } catch {
                        console.error("Invalid Error")
                    }
                break;

                case "C" :
                    try{
                        egRef.current.value = current ? current.slice(0, current.length-1) : 0;
                    }
                    catch{
                        console.error("Invalid Error")
                    }
                break;

                case "AC" :
                    try{
                        egRef.current.value = 0;
                    }
                    catch{
                        console.error("Invalid Error")
                    }
                break;

            }
        }
    }
    return <button onClick={handleOperations} value={children}>{children}</button>
}

export {Buttons, Button}