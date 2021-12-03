import React from "react";



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
        }, 1000)

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
    
        return `${getHours} : ${getMinutes} : ${getSeconds}`
      }

    
      return (
        
        <div className="container">
    
            <h1 className="timer-div">{setformatTime()}</h1>
            <input type="number" className="inputUser-div" value={currentTimer} onChange={(C) => setTimerStartState(C.target.value)}/>
            <button className="button-div" onClick={startTimer}>Start</button>
            <button className="button-div-2" onClick={stopTimer}>Stop</button>
    
          </div>
      )

}




export default CountdownTimerStart;