//Q9. Write the syntax to create and provide a Context using createContext() and Context.Provider.

import { createContext } from "react"
import Consumer from "./Consumer"

const empname = createContext()
const emprole = createContext()


const Create_Context = () => {


    return (
        <>
            <h1>Create Context</h1>
            <hr />
            <empname.Provider value="12345">
                <emprole.Provider value="MERN Stack Developer">

                    <Consumer />

                </emprole.Provider>
            </empname.Provider>

        </>)
}

export default Create_Context
export { empname, emprole }