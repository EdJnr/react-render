import { useState } from "react"

const initState=['Edward','Odai ']

export const ArrayUseState=()=>{
    const[persons,setPersons]=useState(initState);

    const addPerson=()=>{
        const newPerson=[...persons,'Amartey']
        setPersons(newPerson)
    }
    console.log('Array usestate render');
return(
    <div className="">
        <h4>Array useState Render </h4>
        <button onClick={addPerson}>Add people</button>
        {persons.map((person)=>
            <p key={person}>{person}</p>
        )}
    </div>
)}