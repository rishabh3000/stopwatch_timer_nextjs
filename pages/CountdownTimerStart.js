import React, { useEffect } from "react";

function CountdownTimerStart() {

  const [currentTimer, setTimerStartState] = React.useState(0);
    const[isTimerStart, setIsTimerStart] = React.useState(0);
    const[isStopTimer, setIsStopTimer] = React.useState(0);
    const increaseTime = React.useRef(null);
    
    
    function startTimer() {
      
        setIsTimerStart(true);
        setIsStopTimer(true);



        increaseTime.current = setInterval(() => {
            setTimerStartState((currentTimer) => currentTimer - 1)
        }, 1000);

        if(currentTimer <= 0) {
          clearInterval(currentTimer);
     
        }
    }
    
    function stopTimer() {

      clearInterval(increaseTime.current);
      setIsStopTimer(false);

    }



    
  
      
 
    const setformatTime = () => {
        const getSeconds = `0${(currentTimer % 60)}`.slice(-2)

        const minutes = `${Math.floor(currentTimer / 60)}`
        
        const getMinutes = `0${minutes % 60}`.slice(-2)

        const getHours = `0${Math.floor(currentTimer / 3600)}`.slice(-2)
      
      if(currentTimer >= 0) {
        return `${getHours} : ${getMinutes} : ${getSeconds}`
      }
      else {
        clearInterval(currentTimer);
        return `${0} : ${0} : ${0}`
      }
    }
   

    
      return (
        
        <div className="container">
    
            <h1 className="timer-div">{setformatTime()}</h1>
            {/* <input type="number" className="inputUser-div" value={currentTimer} onChange={(C) => setTimerStartState(C.target.value)}/> */}
            <input type="number" className="inputUser-div" onChange={(C) => setTimerStartState(C.target.value)}/>
            <button className="button-div" id="buttonStartClick" onClick={startTimer}>Start</button>
            <button className="button-div-2" onClick={stopTimer}>Stop</button>
            
    
          </div>
      )

}




export default CountdownTimerStart;