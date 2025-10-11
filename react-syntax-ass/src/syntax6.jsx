// **Q6.** Write the syntax of the **useEffect** Hook that runs only once when the component mounts.

import { useEffect } from "react";

function Example() {
useEffect(() => {
console.log("mounted!");
}, []);

return <h2>useEffect Example</h2>;
}

export default Example;