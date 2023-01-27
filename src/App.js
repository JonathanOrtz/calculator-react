import './App.css';
// freecodecamp logo imported
import freecodecampLogo from '../src/images/freecodecamp-logo.png';
import Button from './components/Button';
import Screen from './components/screenR';
import ButtonClear from './components/Clear-button';
import { useState } from 'react';
import { evaluate} from 'mathjs';

function App() {

  const [input, setInput] = useState('');

  const aggInput = val =>{
    setInput(input + val);
  }

  const calculateResult = () =>{
    if(input) {
      setInput(evaluate(input))
    }else{
      alert("add values to calculate.")
    }

  }


  return (
    <div className="App">
      <div className='freecodecamp-logo-container'>
        <img
          className='freecodecamp-logo' 
          src={freecodecampLogo}
          alt='freecodecamp-logo'
        />
      </div>

      <div className='calculator-container'>
        <Screen input = { input } />
        <div className='fila'>
          <Button manageClick={aggInput}>1</Button>
          <Button manageClick={aggInput}>2</Button>
          <Button manageClick={aggInput}>3</Button>
          <Button manageClick={aggInput}>+</Button>
        </div>
        <div className='fila'>
          <Button manageClick={aggInput}>4</Button>
          <Button manageClick={aggInput}>5</Button>
          <Button manageClick={aggInput}>6</Button>
          <Button manageClick={aggInput}>-</Button>
        </div>
        <div className='fila'>
          <Button manageClick={aggInput}>7</Button>
          <Button manageClick={aggInput}>8</Button>
          <Button manageClick={aggInput}>9</Button>
          <Button manageClick={aggInput}>*</Button>
        </div>
        <div className='fila'>
          <Button manageClick={calculateResult}>=</Button>
          <Button manageClick={aggInput}>0</Button>
          <Button manageClick={aggInput}>.</Button>
          <Button manageClick={aggInput}>/</Button>
        </div>
        <div className='fila'>
          <ButtonClear manageClear={()=> setInput('')}>
            Clear
          </ButtonClear>
        </div>
      </div>
    </div>
  );
}

export default App;
