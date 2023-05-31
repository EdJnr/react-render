import { useState } from "react"
import { UseState } from "../useState/useState";
import { BabyOne } from "./baby1";
import { ChildOne } from "./child1";
import { ParentOne } from "./parent1";

export const GrandParentOne=()=>{
    const[count,setCount]= useState(0);
    console.log('Grand Parent1 render');
    return(
        <div className="">
            <h5>Grand Parent render1</h5>
            <button
            onClick={()=>setCount(count=>count+1)}
            >
                count - {count}
            </button>

            <ParentOne >
                <ChildOne counter={count}>
                    <BabyOne counter={count}/>
                </ChildOne>
            </ParentOne>
        </div>
    )
}