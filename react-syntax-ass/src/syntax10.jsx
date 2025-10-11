//Q10. Write the syntax to access a context value inside a component using useContext().


import { useContext } from "react"
import { empname, emprole } from "./Create_Context"

const Consumer = () => {

    const employee_name = useContext(empname)
    const employee_role = useContext(emprole)

    return (
        <>

            <h1> Consumer Component</h1>

            <h2>Employee Id - {employee_name}</h2>
            <h2>Emp Role -  {employee_role}</h2>


        </>
    )
}

export default Consumer