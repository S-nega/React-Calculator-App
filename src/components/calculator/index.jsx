import { useState } from "react";

export const Calculator = () => {
  const [result, setResult] = useState('0');
  const [firstResult, setFirstResult] = useState('0');
  const [lastAction, setLastAction] = useState('');
  const [isActive, setIsActive] = useState(false);

  const buttons = [
    7, 8, 9, 'DEL', 4, 5, 6, '+', 1, 2, 3, '-', '.', 0, '/', 'x', 'RESET', '=' 
  ];

  const actions = (lastAction) =>{
    setIsActive(true);
    if(lastAction === '+'){
      setResult(String(parseFloat(firstResult) + parseFloat(result)));
      setFirstResult(String(parseFloat(firstResult) + parseFloat(result)));
    }
    else if(lastAction === '-'){
      setResult(String(parseFloat(firstResult) - parseFloat(result)));      
      setFirstResult(String(parseFloat(firstResult) - parseFloat(result)));      
    }
    else if(lastAction === 'x'){
      setResult(String(parseFloat(firstResult) * parseFloat(result)));      
      setFirstResult(String(parseFloat(firstResult) * parseFloat(result)));      
    }
    else if(lastAction === '/'){
      setResult(String(parseFloat(firstResult) / parseFloat(result)));      
      setFirstResult(String(parseFloat(firstResult) / parseFloat(result)));      
    }
  }
  const handleSetResult = (num) => {
    if(num === '='){
      actions(lastAction);
      setIsActive(false);
      return setLastAction('');
    }
    if(num === '.'){
      if(Number(result) && !isActive){
        if(result.includes('.')){
          return null;
        }
        return setResult(result + '.');
      }
      setIsActive(false);
      return setResult('0.');
    }
    if(num === 'DEL'){
      if(result.length === 1){
        return setResult('0');
      }
      setFirstResult(String(result).slice(0, -1));
      return setResult(String(result).slice(0, -1));
    }
    if(num === 'RESET'){
      setFirstResult('');
      setLastAction('');
      return setResult('0');
    }
    
    if(!Number(num) && isActive){
      return null;
    }
    else if(num === '+'){
      setFirstResult(result);
      actions(lastAction);
      return setLastAction('+');
    }
    else if(num === '-'){
      setFirstResult(result);
      actions(lastAction);
      return setLastAction('-');
    }
    else if(num === 'x'){
      setFirstResult(result);
      actions(lastAction);
      return setLastAction('x');
    }
    else if(num === '/'){
      setFirstResult(result);
      actions(lastAction);
      return setLastAction('/');
    }
    else{ 
      if(isActive){
        setResult(String(num));
        setIsActive(false);
      }
      else if ((Number(result) && result !=='0') || result === '0.'){
        setResult(String(result) + num);
      }
      else{
        setResult(String(num));
      }
    }
  }
  
    return (
      <>
        <div className="calculator-result">
            {result}
        </div>

        <div className="calculator-buttons">

        {buttons.map((button) => (
          <button id={button} 
            type="button" className="button"
            onClick={()=>handleSetResult(button)}>
                {button}
          </button>
        ))}

        </div>
      </>
    );
  };