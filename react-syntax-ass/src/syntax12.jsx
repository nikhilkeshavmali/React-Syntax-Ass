// **Q12.** Write a small example of **form handling using `useRef`**, where clicking the **Submit** button logs all entered details (Name, Email, City, and Course) in the console.

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


