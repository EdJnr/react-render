import { useState } from "react"

const initState={
    fName:'Nii',
    lName:'Amarh'
}

export const ObjectUseState=()=>{
const[person,setPerson]=useState(initState);
const changeName=()=>{
    const newPerson={
        ...person,
        fName:'Nii',
        lName:'Odai'
    }
    setPerson(newPerson)
}
console.log('Object usestate render');
return(
    <div className="">
        <h4>Object useState Render </h4>
        <button onClick={changeName}>{person.fName} {person.lName}</button>
    </div>
)}