import '../App.css';
import {Button} from './Buttons.jsx';
import { Context } from './Context.jsx';

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

function DivOpr(props){
    const {child, cn} = props;
    return <>
    <div className={cn}>
        {child.map((x, index)=>{
            return <Button key={index}>{x}</Button>
        })}
    </div>
    </>
}

function handleClick(e){
    handleInput(e);
}

export {Div, DivOpr, handleClick}