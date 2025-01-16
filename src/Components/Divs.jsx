import '../App.css';
import {Button} from './Buttons.jsx';

function Div(props){
    const {children, cn} = props;
    return <>
        <div className={cn}>
            {children}
        </div>
    </>
}

function DivOpr(props){
    const {child, cn} = props;
    return <>
    <div className={cn}>
        {child.map((x)=>{
            return <Button children={x} onClick={()=>handleClick(x)}></Button>
        })}
    </div>
    </>
}

function handleClick(e){
    
}

export {Div, DivOpr, handleClick}