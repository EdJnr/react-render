import { useState } from "react"
 import { ChildOne } from "./child1";

export const ParentOne=({children})=>{
    const[count,setCount]= useState(0);
    console.log('Parent1 render');
    return(
        <div className="">
            <h5>Parent render1</h5>
            <button
            onClick={()=>setCount(count=>count+1)}
            >
                count - {count}
            </button>
            {children}
         </div>
    )
}