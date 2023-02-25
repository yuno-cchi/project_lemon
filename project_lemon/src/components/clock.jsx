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
            <p id="time" class="noselect">{currentTime}</p>
            <p id="date" class="noselect">{currentDate}</p>
        </div>
    )
}

export default Clock;