import { useState } from 'react'
import { calculadora }  from './ULA.js'


function App() {
  const operacoes = ['+', '-', 'x', '÷']
  const caracteres = ['1', '2', '3', operacoes[0], '4', '5', '6', operacoes[1], '7', '8', '9', operacoes[2], operacoes[3], '0', '.', '=']
  const [ input, setInput ] = useState('');
  const outputFails = ["NaN", "Infinity", "syntax error!"];
  const maxSize = 17

  const handleClick = (num) => {
    if(num === 'clear'){
      setInput((prevInput) => 
        outputFails.includes(prevInput) ?
        prevInput = "" :
        prevInput.trimEnd().slice(0, -1).trimEnd());  // remover espaços caso existam
    }
    else if(num === '='){                             // realizar operações aritmeticas
      setInput((prevInput) => calculadora(prevInput));
    }
    else if (operacoes.includes(num)) {               // adiciona operações aritmeticas
      setInput((prevInput) => 
        prevInput == "" ?
        prevInput + num :
        prevInput.slice(0, maxSize) + ' ' + num + ' ');
    }else{
      setInput((prevInput) => 
        prevInput.slice(0, maxSize) + num);
    }
  };

  return (
    <div className="painel">
      <input value={input}/>

      <div className="delete" onClick={() => handleClick('clear')}>←</div>
        
      <div>
        {caracteres.map((num) => (
          <button onClick={() => handleClick(num)} key={num}>
            {num}
          </button>
        ))}
      </div>
    </div>
  )
}

export default App
