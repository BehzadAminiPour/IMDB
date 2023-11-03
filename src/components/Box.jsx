import { useState } from "react";
import classes from './Box.module.css'
function Box({children}) {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div className={classes.box}>
      <button
        className={classes['btn-toggle']}
        onClick={() => setIsOpen((open) => !open)}
      >
        {isOpen ? "–" : "+"}
      </button>
      {isOpen && children}
    </div>
  );
}

export default Box;
