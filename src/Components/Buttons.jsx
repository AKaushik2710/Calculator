import '../App.css'
import { useContext } from 'react';
import { Context } from './Context.jsx';

// Render Numeric Buttons
function Buttons({count, indexSetter, cn}) {
    const arr = [];
// Using context for Click Functionality 
    const handleClick = useContext(Context);
    for (let i = 0; i <= count; i++) {
        arr.push(i);
    }
    return (
        <div className={"nums"}>
            {arr.map((x, index) => (
                <button key={index} className={cn} id={cn + x} onClick={()=>{
                    handleClick(x);
                    indexSetter(2);
                }}>{x}</button>
            ))}
        </div>
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
    const {children, id, oprt,egRef, setResult, stateSetter, onClick, indexSetter} = props;
    const handleClick = useContext(Context);
    function handleOperations(e){
        
        if(oprt){ // children== operators 
            indexSetter(2); // setting index to 1 for back functionality
            stateSetter(()=>false); // determining value is before result 
            handleClick(children); // click functionality 
        }
        else{
            let current = egRef.current ? egRef.current.value : ''; // getting current input for non-input operations
            switch (e.target.value){
                case "=":

                    try { 
                        const result = current ? eval(current) : 0;
                        if(result % 1 !== 0){
                            egRef.current.value = result.toFixed(2); // set current ref value to 0 if ref is empty 
                        }
                        else{
                            egRef.current.value = result; // set result to input field
                        }
                        stateSetter(true); // setting after result state true
                        setResult(egRef.current.value, true); // creating result history 
                    } catch(error){
                        console.error("Invalid Error")
                    }
                break;

                case "C" :
                    try{
                        egRef.current.value = current ? current.slice(0, current.length-1) : 0; // removing a single character from input 
                    }
                    catch(error){
                        console.error("Invalid Error")
                    }
                break;

                case "AC" :
                    try{
                        egRef.current.value = 0; // removing all characters from input 
                    }
                    catch(error){
                        console.error("Invalid Error")
                    }
                break;

                case "<=" :
                    try{
                        onClick(true); // setting undo functionality
                    }
                    catch(error){
                        console.error("Invalid Error");
                    }
                break;
                case "=>" : 
                    try{
                        onClick(); // setting redo functionality
                    }
                    catch(error){
                        console.error("Invalid Error");
                    }
                break;
            }
        }
    }
    return <button onClick={handleOperations} id={id} value={children}>{children}</button>
}

export {Buttons, Button}