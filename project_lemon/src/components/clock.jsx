import { useState } from "react";

const Clock = () => {
    let time = new Date().toLocaleTimeString();
    let date = new Date().toLocaleDateString();
    const [currentTime, setCurrentTime] = useState(time);
    const [currentDate, setCurrentDate] = useState(date);

    const updateTime = () => {
        let time = new Date().toLocaleTimeString();
        setCurrentTime(time);
    }

    const updateDate = () => {
        let date = new Date().toLocaleDateString();
        setCurrentDate(date);
    }

    setInterval(updateTime, 500);
    setInterval(updateDate, 1000)

    return (
        <div>
            <h1>{currentTime}</h1>
            <h2>{currentDate}</h2>
        </div>
    )
}

export default Clock;