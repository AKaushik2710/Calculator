import { useState, useRef} from 'react'
import {Div, DivOpr} from './Components/Divs.jsx'
import {Buttons} from './Components/Buttons.jsx'
import Input from './Components/Input.jsx'

function App() {
  const myRef = useRef("");
  const [result, setResult] = useState(0);
  function handleClick(value){
    console.log(value);
    myRef.current = value;
  }
  return <>
  <Div cn="holder">
    <Div cn="calc" onClick={handleClick} >
      <Input  ref={myRef}/>
      <DivOpr cn="opr_set_1" child={["AC", "C", "/", "*"]} />
      <DivOpr cn="opr_set_2" child={["-", "+", "="]} />
      <Buttons count={9} />
    </Div>
  </Div>

  </>
}

export default App
