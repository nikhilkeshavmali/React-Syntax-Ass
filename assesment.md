# React JS Assessment

---

### 🎯 _Focus: Components, JSX, Hooks & Basic Routing_

---

**Q1.** Write the syntax of a **functional component** in React.

function hello() {
return (
<div>
<h1>Hello, this is a Functional Component!</h1>
</div>
);
}

export default hello;

**Q2.** Write the syntax to **export and import** a React component.

function demo() {
return <h2>Hello from MyComponent!</h2>;
}

export default demo;

**Q3.** Write a JSX syntax that returns a `<div>` with a heading **“Welcome to React”** and a paragraph **“Learning React is fun!”**.

function Message() {
return (
<div>
<h1>Welcome to React</h1>
<p>Learning React is fun!</p>
</div>
);
}

export default Message;

**Q4.** Write the syntax to **declare a state variable** named `count` initialized to 0 using `useState`.

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

**Q5.** Write the syntax for a **counter app** using `useState` that increases the value by 1 on button click.

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

**Q6.** Write the syntax of the **useEffect** Hook that runs only once when the component mounts.

import { useEffect } from "react";

function Example() {
useEffect(() => {
console.log("mounted!");
}, []);

return <h2>useEffect Example</h2>;
}

export default Example;

**Q7.** Write the syntax to import **BrowserRouter, Routes, and Route** from React Router DOM.

import { BrowserRouter, Routes, Route } from "react-router-dom";


**Q8.** Write a short routing syntax showing two routes: `/home` → `Home` component, and `/about` → `About` component.

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;


**Q9.** Write the syntax to **create and provide a Context** using `createContext()` and `Context.Provider`.

import React, { createContext } from "react";


const MyContext = createContext();


function App() {
  const value = "Hello from Context!";

  return (
    <MyContext.Provider value={value}>
      <ChildComponent />
    </MyContext.Provider>
  );
}

export default App;
export { MyContext };


**Q10.** Write the syntax to **access a context value** inside a component using `useContext()`.

import React, { useContext } from "react";
import { MyContext } from "./App"; 

function ChildComponent() {
  const value = useContext(MyContext); 

  return <h2>Context Value: {value}</h2>;
}

export default ChildComponent;


**Q11.** Write the syntax to **create a ref** using `useRef()` and attach it to an `<input>` element.

import { useRef } from "react";

function InputFocus() {
  const inputRef = useRef(null); // create a ref

  const handleFocus = () => {
    inputRef.current.focus(); // access and focus the input element
  };

  return (
    <div>
      <input type="text" ref={inputRef} placeholder="Enter text here" />
      <button onClick={handleFocus}>Focus Input</button>
    </div>
  );
}

export default InputFocus;



**Q12.** Write a small example of **form handling using `useRef`**, where clicking the **Submit** button logs all entered details (Name, Email, City, and Course) in the console.

import React, { useRef } from "react";

function FormUsingRef() {

  const nameRef = useRef();
  const emailRef = useRef();
  const cityRef = useRef();
  const courseRef = useRef();

  
  const handleSubmit = (e) => {
    e.preventDefault(); 


    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const city = cityRef.current.value;
    const course = courseRef.current.value;


    console.log("Name:", name);
    console.log("Email:", email);
    console.log("City:", city);
    console.log("Course:", course);


    e.target.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input type="text" ref={nameRef} />
      </div>
      <div>
        <label>Email:</label>
        <input type="email" ref={emailRef} />
      </div>
      <div>
        <label>City:</label>
        <input type="text" ref={cityRef} />
      </div>
      <div>
        <label>Course:</label>
        <input type="text" ref={courseRef} />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default FormUsingRef;


---
