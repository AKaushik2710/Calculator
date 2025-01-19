import { useState, useRef} from 'react'
import {Div, DivOpr} from './Components/Divs.jsx'
import {Buttons, Button} from './Components/Buttons.jsx'
import Input from './Components/Input.jsx'

// App Displayer 
function App() {
//Initializing a Ref
  const myRef = useRef("");

// State to Determine whether click is after result 
  const [afterCalc, setAfterResult] = useState(false);

// State to set value to input Element 
  const [input, setInput] = useState(myRef.current.value);

// Input value setting function 
  function handleInput(value, setter){
    handleClick(value,setter);
    setInput(myRef.current.value);
  }

// Setting state to determine after result click functionality 
  function handleState(val){
    setAfterResult(val);
  }

// Setting Click Functionality 
  function handleClick(value, input=false){
    if(afterCalc){ // setting after result click functionality to false for after result click 
      setAfterResult(false);
    }
    if(input || afterCalc){// value starts from same if inputting through keyboard in between on-screen typing
      myRef.current.value = value;
    }
    else{ // continuing the value where it left 
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