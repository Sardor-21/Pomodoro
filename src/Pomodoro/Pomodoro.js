import { useEffect, useState } from "react";
import { FaRedoAlt } from "react-icons/fa";
import './Pomodoro.css'


const Pomodoro = (props) => {
    const workTime = props.workTime;
    const restTime = props.restTime;
    const [minute, setminute] = useState(workTime);
    const [second, setsecond] = useState(0)
    const [isWorkink, setisWorkink] = useState(true);
    const [status, setstatus] = useState(false);
    useEffect(() => {
        status && setTimeout(() => {
            if (second > 0) setsecond(second - 1);
            else {
                if (minute != 0) setsecond(59);
                if (minute > 0) setminute(minute - 1);
                else {
                    if (isWorkink) {
                        alert("Dam oling");
                        setminute(restTime);
                    }
                    else {
                        alert("Ishlang");
                        setminute(workTime);
                    }
                    setisWorkink(!isWorkink)
                }
            }
        }, 1000);
    }, [status, second, isWorkink])
    const reload = () => {
        window.location.reload();
    }
    const setZero = n => (n < 10 ? "0" : "") + n;
    return <div className="d-flex justify-content-center align-items-center flex-column pomodoro">
        <div className="pomodoro__time">
            <h1 className="mb-0 d-flex align-items-center">{setZero(minute)}:{setZero(second)}</h1>
        </div>
        <div className="mt-5">
            <button className="btn btn-danger m-2" onClick={() => setstatus(true)}>Start</button>
            <button className="btn btn-danger m-2" onClick={() => setstatus(false)}>Stop</button>
            <button className="btn btn-danger m-2" onClick={reload}><FaRedoAlt /></button>

        </div>
    </div>

}

export default Pomodoro;