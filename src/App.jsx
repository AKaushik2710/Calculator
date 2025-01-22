import { useState, useRef} from 'react'
import {Div, DivOpr} from './Components/Divs.jsx'
import {Buttons, Button} from './Components/Buttons.jsx'
import Input from './Components/Input.jsx'

// App Displayer 
function App() {
//Initializing a Ref
  const myRef = useRef("");

  const initialResult = {
    history:[],
    characters:[]
  };

  const [index, setIndex] = useState(2);
  const [result, setResult] = useState(initialResult);

  // State to Determine whether click is after result 
  const [afterCalc, setAfterResult] = useState(false);

  // State to set value to input Element 
  const [input, setInput] = useState(myRef.current.value);

  function handleResult(value, result=false){
    if(result){
    setResult(prevresult => ({history:[...prevresult.history, value], characters:[...prevresult.characters, value]}));
    }
    else{
      setResult(prevresult => ({...prevresult,characters:[...prevresult.characters, value]}));
    }
  }

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
    handleResult(value, false);
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
  function handleChange(back=false){
    if(back){
      setIndex(index +1);
      const recursor = {
        resume : ()=>{
          return result.characters.length - index;
        },
        restart : ()=>{
          setIndex(2);
          return result.characters.length - 1;
        }
      }
      const backIndex = (result.characters.length - index) >= 0 ? recursor.resume() : recursor.restart(); 
      myRef.current.value = result.characters[backIndex];
    }
  }
  return <>
  <Div cn="holder">
    <Div cn="calc" onClick={handleClick} >
      <Input  egRef={myRef} input={input} handleInput={handleInput} />
      <DivOpr cn="opr_set_1" child={["AC", "C", "="]} egRef={myRef} setResult={handleResult} stateSetter={handleState} indexSetter={setIndex} />
      <DivOpr cn="opr_set_2" child={["-", "+", "/", "*"]} operators={true} egRef={myRef} setResult={handleResult} stateSetter={handleState} indexSetter={setIndex} />
      <Buttons count={9} indexSetter={setIndex} />
    </Div>
    <Div cn="history">
      <Button onClick={handleChange} egRef={myRef}>{"Back"}</Button>
      <div>{result.history.map(x=>(x))}</div>
    </Div>
  </Div>
  </>
}

export default App