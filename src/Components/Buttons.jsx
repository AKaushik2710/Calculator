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
    const {children} = props;
    const handleClick = useContext(Context);
    function handleOperations(){
        handleClick(children);
    }
    return <button onClick={handleOperations}>{children}</button>
}

export {Buttons, Button}