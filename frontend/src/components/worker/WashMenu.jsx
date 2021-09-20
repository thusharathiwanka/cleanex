import React, { useState } from 'react'
import CompletedList from './CompletedList'
import PendingLists from './PendingLists'
import ProcessingList from './ProcessingList'

const WashMenu = (props) => {

    const [List, setList] = useState("pending")

    return (
        <div >
            <div className=" flex justify-evenly  font-bold text-3xl">
            <span onClick={()=>{setList("pending"); props.setErr(false); props.setSucc(false);  }} className="cursor-pointer ">Pending</span>
            <span onClick={()=>{setList("processing"); props.setErr(false); props.setSucc(false);; }} className="cursor-pointer ">Processing</span>
            <span onClick={()=>{setList("completed"); props.setErr(false); props.setSucc(false); }} className="cursor-pointer ">Completed</span> 
            </div> 
            <br/> 
            <div>
            {(List==="pending")? <PendingLists setErr={props.setErr} setSucc={props.setSucc} /> :(List==="processing")? <ProcessingList setErr={props.setErr} setSucc={props.setSucc}  />:<CompletedList/>}
            </div>
        </div>
    )
}

export default WashMenu
