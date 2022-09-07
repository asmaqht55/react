import { useState } from 'react';
import './App.css';

function App() {

const [number1, setNumber1]=useState(0);
const [number2, setNumber2]=useState(0);
const [add, setAdd]=useState(number1 + number2);
const [subtract , setSub]=useState(number1 - number2);
const [multiplied ,setMulti]=useState(number1 * number2);
const [divided, setDiv]=useState(number1 / number2);




function addNumber(){
setAdd(number1+number2);
}

function subtractNumber(){
  setSub(number1-number2);
}

function multipliNumber(){
setMulti(number1*number2);
}

function divNumber(){
setDiv(number1 / number2);

}



  return (
  <>
  <div className="App">

  <h1>Calculator</h1>

  
  <div className='number-input'>
    <input 
    type="number"  
    placeholder='0'
    value={number1} 
    onChange={e => setNumber1( +e.target.value)} 
    />

    <input 
    type="number"  
    placeholder='0' 
    value={number2} 
    onChange={e => setNumber2( +e.target.value)} 
    />

  </div>

<button onClick={addNumber}>+</button>
<button onClick={subtractNumber}>-</button>
<button onClick={multipliNumber}>*</button>
<button onClick={divNumber}>/</button>



<h5>THE TOTAL IS :{add}{subtract}{multiplied}{divided}</h5>

  </div>  
  </>);
}

export default App;

