import { useState, useRef} from 'react'
import {Div, DivOpr} from './Components/Divs.jsx'
import {Buttons, Button} from './Components/Buttons.jsx'
import Input from './Components/Input.jsx'
import './App.css'

// App Displayer 
function App() {
  //Initializing a Ref
  const myRef = useRef("");

  // History Grabber
  const initialResult = {
    history:[],
    characters:[]
  };

  // Index for History Manipulation
  const [index, setIndex] = useState(2);

  // Result State
  const [result, setResult] = useState(initialResult);

  const [history, setHistory] = useState(false);

  // State to Determine whether click is after result 
  const [afterCalc, setAfterResult] = useState(false);

  // State to set value to input Element 
  const [input, setInput] = useState(myRef.current.value);

  // Setting Result History
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

  function handleHistory(val){
    handleState(false);
    myRef.current.value = val;
  }
  // Setting Back and Forward Functionality
  function handleChange(back=false){
    handleState(false);
    console.log(result.characters, index);
    if(back){ // Back Functionality
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
    else{ // Forward Functionality
      const recursor = {
        resume : ()=>{
          setIndex(index - 1);
          return result.characters.length -index +2;
        },
        restart : ()=>{
          const marker = (result.characters.length - index +2) - result.characters.length;
          marker < 1 ? setIndex(index -1) : setIndex(result.characters.length);
          return marker;
        }
      }
      const backIndex = (result.characters.length - index +2) < result.characters.length ? recursor.resume() : recursor.restart(); 
      myRef.current.value = result.characters[backIndex];
    }
  }
  return <>
  <Div cn="holder"> // Parent Div Holder 
    <Div cn="calc" onClick={handleClick} > // Calculation Functionality Div
      <Input  egRef={myRef} input={input} handleInput={handleInput} /> // Input Field 
      <DivOpr cn="opr_set_1" child={["AC", "C", "="]} egRef={myRef} setResult={handleResult} stateSetter={handleState} indexSetter={setIndex} /> // Assignments 
      <DivOpr cn="opr_set_2" child={["+", "-", "/", "*", "."]} operators={true} egRef={myRef} setResult={handleResult} stateSetter={handleState} indexSetter={setIndex} /> // Arithmetic Operations 
      <Buttons cn="numbtns" count={9} indexSetter={setIndex} /> // Numbers 
    </Div>
    <Div cn="msc-function"> // Miscellaneous Operations i.e. UNDO, REDO, HISTORY 
      <Button onClick={handleChange} id={"back"} egRef={myRef}>{"<="}</Button> // Undo Functionality 
      <Button onClick={handleChange} id={"for"} egRef={myRef}>{"=>"}</Button> // Redo Functionality 
      <button onClick={()=> setHistory(!history)} id={"hist"}>{"hist"}</button> {// History Activation Button }
    </Div>
    {history ? <Div cn="history">{result.history.map((val, index) => <p key={index} onClick={()=> handleHistory(val)}>{val}</p>)}</Div> : null} // HISTORY DISPLAY 
  </Div>
  </>
}

export default App