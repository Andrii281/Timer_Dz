import React from 'react'

function TimerButton(props){
    return (
        <div>
          {
          (props.state) ? 
            <button className="start-button" onClick={props.start}>Run</button> :  
            <button className="stop-button" onClick={props.stop}>Stop</button>
          }
          </div>
          );
}

export default TimerButton;