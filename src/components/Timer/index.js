import React, {useState } from 'react';
import TimerButton from '../TimerButton'

function Timer(props){
    const [Time, setTime] = useState(props.time);
    const [Interval, changeInterval] = useState();
    const [timerState, changeState] = useState(true);
    const curretTime = {minutes: Time.minutes, seconds: Time.seconds};
    let timerInterval = null;


    const start = () =>{

        changeInterval(setInterval(runRun , props.step));
        changeState(currentState => !currentState);
    }

    const stop = () => {
        changeInterval(Interval => clearInterval(Interval));
        changeState(currentState => !currentState);
    }

    const runRun = () => {
        run();
    }

        const run =  () => {
                if(curretTime.seconds <= 0 && curretTime.minutes <= 0){
                    props.onTimeEnd();  
                    stop();
                    return setTime({seconds: props.time.seconds, minutes: props.time.minutes})
                }
                else{
                    if(curretTime.seconds === 0 ){
                        curretTime.minutes -= 1;
                        curretTime.seconds = 60;
                    }
                    else{
                        curretTime.seconds -= 1;
                        
                    }
                }
                
                return setTime({minutes: curretTime.minutes, seconds: curretTime.seconds });
        }

   

    return (
        <div>
            <p>{Time.minutes < 10 ? '0'+ Time.minutes : Time.minutes}:
            {Time.seconds < 10 ? '0' + Time.seconds : Time.seconds}
            </p>
            <div className = "timeBar"></div>
            <TimerButton state = {timerState} start = {start} stop = {stop}/>
        </div>
    )
}


export default Timer;