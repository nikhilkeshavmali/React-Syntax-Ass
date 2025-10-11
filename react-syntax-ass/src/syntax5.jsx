
// **Q5.** Write the syntax for a **counter app** using `useState` that increases the value by 1 on button click.

import { useState } from "react";

function CounterApp() {
const [count, setCount] = useState(0); // state variable initialized to 0

const handleClick = () => {
setCount(count + 1); // increase count by 1
};

return (
<div>
<h2>Count: {count}</h2>
<button onClick={handleClick}>Increase</button>
</div>
);
}

export default CounterApp;
