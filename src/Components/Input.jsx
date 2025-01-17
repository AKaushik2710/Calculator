import { useContext } from 'react';
import { Context } from './Context.jsx';

export default function Input(props){
    const {ref} = props;
    const handleClick = useContext(Context);
    return <input type="text" ref={ref} onChange={(e)=>handleClick(e.target.value)}/>
}
