// **Q4.** Write the syntax to **declare a state variable** named `count` initialized to 0 using `useState`.

import { useState } from "react";

function Counter() {
const [count, setCount] = useState(0); // state variable declaration

return (
<div>
<h2>Count: {count}</h2>
</div>
);
}

export default Counter;
