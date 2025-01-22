import '../App.css';
import {Button} from './Buttons.jsx';
import { Context } from './Context.jsx';
 
/*
children/child : child element/value
cn : class name
onClick : Click handling 
operators : if child is operator or not
egRef : Passing ref
stateVal : determine if click is after result 
stateSetter : setting state for after result 
handleInput : setting input value 
*/

// Parent Div Container
function Div(props){
    const {children, cn, onClick} = props;
    return <>
        <div className={cn}>
            <Context.Provider value={onClick}>
            {children}
            </ Context.Provider>
        </div>
    </>
}

// Non-Numerical Button Holder 
function DivOpr(props){
    const {child=[], cn,operators=false,egRef, stateSetter, setResult, indexSetter} = props;
    return <>
    <div className={cn}>
        {child.map((x, index)=>{
            return <Button key={index} id={cn+index} oprt={operators} egRef={egRef} setResult={setResult} indexSetter={indexSetter} stateSetter={stateSetter} >{x}</Button>
        })}
    </div>
    </>
}



export {Div, DivOpr,}