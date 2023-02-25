import { useState, useEffect } from "react";

const Greeting = () => {
  const [greet, setGreet] = useState("Welcome back");

  useEffect(() => {
    const interval = setInterval(() => {
      const hour = new Date().getHours();

      if (hour >= 4 && hour < 12) {
        setGreet("Good morning");
      } else if (hour >= 12 && hour < 17) {
        setGreet("Good afternoon");
      } else if (hour >= 17 && hour <= 23) {
        setGreet("Good evening");
      } else {
        setGreet("Good night");
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <h2 className="header">{greet}.</h2>
  );
}

export default Greeting;