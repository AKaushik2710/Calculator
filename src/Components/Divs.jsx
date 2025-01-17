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
    const {child, cn,operators=false,egRef} = props;
    return <>
    <div className={cn}>
        {child.map((x, index)=>{
            return <Button key={index} oprt={operators} egRef={egRef}>{x}</Button>
        })}
    </div>
    </>
}



export {Div, DivOpr,}