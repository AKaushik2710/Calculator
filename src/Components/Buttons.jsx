import '../App.css'
import { useContext, useState } from 'react';
import { Context } from './Context.jsx';

// Render Numeric Buttons
function Buttons({count}) {
    const arr = [];
// Using context for Click Functionality 
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

// Rendering Non-Numerical Buttons 
function Button(props){
/*
children : child element to be displayed 
oprt : is child operator or not 
egRef : passing reference for input value
stateSetter : state setting function to check whether input value is after result 
stateVal : value is after result or not 
handleInput: Not used
*/
    const {children, oprt,egRef, stateVal, stateSetter, handleInput} = props;
    const handleClick = useContext(Context);
    const initialResult = {
        history:[],
        characters:[]
    };
    const [result, setResult] = useState(initialResult);
    
    function handleOperations(e){
        if(oprt){ // children== operators 
            stateSetter(()=>false); // determining value is before result 
            handleClick(children); // click functionality 
        }
        else{
            const current = egRef.current.value; // getting current input for non-input operations
            switch (e.target.value){
                case "=":
                    try {
                        egRef.current.value = current ? eval(current) : 0; // set current ref value to 0 if ref is empty 
                        setResult({...result, history : [...result.history, egRef.current.value]}); // creating result history 
                        stateSetter(true); // setting after result state true
                    } catch {
                        console.error("Invalid Error")
                    }
                break;

                case "C" :
                    try{
                        egRef.current.value = current ? current.slice(0, current.length-1) : 0; // removing a single character from input 
                    }
                    catch{
                        console.error("Invalid Error")
                    }
                break;

                case "AC" :
                    try{
                        egRef.current.value = 0; // removing all characters from input 
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