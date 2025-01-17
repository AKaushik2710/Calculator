import '../App.css'
import { useContext } from 'react';
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
    const {children, oprt,egRef} = props;
    const handleClick = useContext(Context);
    function handleOperations(){
        if(oprt){
            handleClick(children);
        }
        else{
            switch (children){
                case "=":
                    const current = egRef.current.value;
                    const operators = [];
                    for (let x of current){
                        if (isNaN(x)){
                            operators.push(x);
                        }
                    }
                    
            }
        }
    }
    return <button onClick={handleOperations}>{children}</button>
}

export {Buttons, Button}