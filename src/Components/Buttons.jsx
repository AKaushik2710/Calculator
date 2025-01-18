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
            const current = egRef.current.value;
            switch (children){
                case "=":
                    try {
                        egRef.current.value = current ? eval(current) : 0;
                    } catch {
                        confirm.error("Invalid Error")
                    }
                break;

                case "C" :
                    try{
                        egRef.current.value = current ? current.slice(0, current.length-1) : 0;
                    }
                    catch{
                        confirm.error("Invalid Error")
                    }
                break;

                case "AC" :
                    try{
                        egRef.current.value = 0;
                    }
                    catch{
                        confirm.error("Invalid Error")
                    }
                break;
            }
        }
    }
    return <button onClick={handleOperations}>{children}</button>
}

export {Buttons, Button}