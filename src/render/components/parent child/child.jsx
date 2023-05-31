import { useState } from "react"

export const Child=({children})=>{
    const[count,setCount]= useState(0);
    console.log('Child render');
    return(
        <div className="">
            <h5>Child render</h5>
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
        </div>
    )
}