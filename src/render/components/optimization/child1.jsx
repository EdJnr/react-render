import { Children, useState } from "react"

export const ChildOne=({children,counter})=>{
    const[count,setCount]= useState(0);
    console.log('Child1 render');
    return(
        <div className="">
            <h5>Child1 render {counter}</h5>
            {children}
            {/* <button
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
            </button>  */}
        </div>
    )
}