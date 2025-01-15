import { useState } from 'react'
import {Div, DivOpr, handleClick} from './Components/Divs.jsx'
import {Buttons} from './Components/Buttons.jsx'
import Input from './Components/Input.jsx'

function App() {
  return <>
  <Div cn="holder">
    <Div cn="calc">
      <Input />
      <DivOpr cn="opr_set_1" child={["AC", "C", "/", "*"]}/>
      <DivOpr cn="opr_set_2" child={["-", "+", "="]}/>
      <Buttons count={9} onClick={handleClick}/>
    </Div>
  </Div>

  </>
}

export default App
