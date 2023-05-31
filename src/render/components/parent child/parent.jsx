import { useState } from "react"
import { Child } from "./child";

export const Parent=()=>{
    const[count,setCount]= useState(0);
    console.log('Parent render');
    return(
        <div className="">
            <h5>Parent render</h5>
            <button
            onClick={()=>setCount(count=>count+1)}
            >
                count - {count}
            </button>

            <button
            onClick={()=>setCount(0)}
            >
                count to 0
            </button>

            <button
            onClick={()=>setCount(5)}
            >
                count to 5
            </button> 

            <Child/> 
        </div>
    )
}