import { useEffect, useState } from "react";
import "./timer.css";

export default function Timer() {
  const [sec, setSec] = useState(0);
  const [min, setMin] = useState(0);
  const [hrs, setHrs] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [everStarted, setEverStarted] = useState(false);
  const [flows, setFlows] = useState(0);

  var timer;

  useEffect(() => {
    if (isRunning) {
      timer = setInterval(() => {
        setSec((prevSec) => (prevSec === 59 ? 0 : prevSec + 1));

        if (sec === 59) {
          if (!everStarted) setEverStarted(true);
          setMin((prevMin) => (prevMin === 59 ? 0 : prevMin + 1));
          setSec(0);

          if (min === 59) {
            setHrs((prevHrs) => prevHrs + 1);
            setMin(0);
          }

          if ((min === 30 || min === 0) && everStarted) {
            setFlows((prevFlows) => prevFlows + 1);
          }
        }
      }, 1000);
    }

    return () => clearInterval(timer);
  }, [isRunning, sec, min, hrs]);

  const start = () => {
    setIsRunning(true);
  };

  const stop = () => {
    setIsRunning(false);
  };

  const restart = () => {
    setSec(0);
    setMin(0);
    setHrs(0);
    setIsRunning(true);
    setEverStarted(false);
  };

  return (
    <div
      className="timer"
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div className="container">
        <div
          className="timer-container"
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-Between",
            alignItems: "center",
          }}
        >
          <p className="Pomo">Pomodore</p>
          <h3 className="time">
            {hrs < 10 ? "0" + hrs : hrs}:{min < 10 ? "0" + min : min}:
            {sec < 10 ? "0" + sec : sec}
          </h3>
          <div className="btns">
            <button
              className="start"
              onClick={start}
              style={{
                padding: "20px",
                fontFamily: "monospace",
                backgroundColor: "#EB3936",
                color: "white",
                border: "none",
                borderRadius: "5px",
                margin: "1px",
              }}
            >
              {!everStarted ? "Start" : "Resume"}
            </button>
            <button
              className="stop"
              onClick={stop}
              style={{
                padding: "20px",
                fontFamily: "monospace",
                backgroundColor: "#EB3936",
                color: "white",
                border: "none",
                borderRadius: "5px",
                margin: "1px",
              }}
            >
              Stop
            </button>
            <button
              className="restart"
              onClick={restart}
              style={{
                padding: "20px",
                fontFamily: "monospace",
                backgroundColor: "#EB3936",
                color: "white",
                border: "none",
                borderRadius: "5px",
                margin: "1px",
              }}
            >
              Restart
            </button>
          </div>
        </div>
      </div>
      <p
        className="flows"
        style={{
          maxWidth: "100%",
          height: "100%",
          alignItems: "center",
        }}
      >
        You did {flows} flows
      </p>
    </div>
  );
}
