
// **Q11.** Write the syntax to **create a ref** using `useRef()` and attach it to an `<input>` element.

import { useRef } from "react";

function InputFocus() {
  const inputRef = useRef(null);

  const handleFocus = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <input type="text" ref={inputRef} placeholder="Enter text here" />
      <button onClick={handleFocus}>Focus Input</button>
    </div>
  );
}

export default InputFocus;


