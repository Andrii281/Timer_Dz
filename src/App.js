
import './App.css';
import Timer from './components/Timer/';

import { useState } from 'react';

function App() {

  const [step, changeState] = useState(1000);
  const [time, setTime] = useState({minutes: 1, seconds: 3});

  return (
    <div className="App">

      <Timer 
      step = {step} time = {time} 
      onTimeEnd = {() =>{
        return setTime({minutes: 0, seconds: 21})} 
      } 
      />
    </div>
  );
}

export default App;
