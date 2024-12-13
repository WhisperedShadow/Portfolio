import { useEffect } from "react";
import './cursor.css'

const Cursor = () => {
  const cursorEvent = (e) => {
    let c = document.querySelector('.cursor');
    c.style.left = `${e.clientX - c.offsetWidth / 2}px`; 
    c.style.top = `${e.clientY - c.offsetHeight / 2}px`;  
  };

  useEffect(() => {
    document.body.addEventListener("mousemove", cursorEvent);

    return () => {
      document.body.removeEventListener("mousemove", cursorEvent);
    };
  });

  return (
    <div className="cursor"></div>
  );
};

export default Cursor;
