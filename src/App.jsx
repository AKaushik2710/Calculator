import { useState, useRef} from 'react'
import {Div, DivOpr} from './Components/Divs.jsx'
import {Buttons, Button} from './Components/Buttons.jsx'
import Input from './Components/Input.jsx'

function App() {
  const myRef = useRef("");
  const [afterCalc, setAfterResult] = useState(false);
  const [input, setInput] = useState(myRef.current.value);
  function handleInput(value, setter){
    handleClick(value,setter);
    setInput(myRef.current.value);
  }
  function handleState(val){
    setAfterResult(val);
  }
  function handleClick(value, input=false){
    if(afterCalc){
      setAfterResult(false);
    }
    if(input || afterCalc){
      myRef.current.value = value;
    }
    else{
    myRef.current.value!=0? myRef.current.value += value : myRef.current.value = value;
  }
  }
  return <>
  <Div cn="holder">
    <Div cn="calc" onClick={handleClick} >
      <Input  egRef={myRef} input={input} handleInput={handleInput} />
      <DivOpr cn="opr_set_1" child={["AC", "C", "="]} egRef={myRef} stateVal={afterCalc} stateSetter={handleState} handleInput={handleInput} />
      <DivOpr cn="opr_set_2" child={["-", "+", "/", "*"]} operators={true} egRef={myRef} stateSetter={handleState}/>
      <Buttons count={9} />
    </Div>
    <Div cn="history">
      <Button>{"Back"}</Button>

    </Div>
  </Div>

  </>
}

export default App