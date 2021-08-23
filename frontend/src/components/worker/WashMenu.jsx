import React, { useState } from 'react'
import CompletedList from './CompletedList'
import PendingLists from './PendingLists'
import ProcessingList from './ProcessingList'

const WashMenu = (props) => {

    const [List, setList] = useState("pending")

    return (
        <div >
            <div class=" flex justify-evenly  font-bold text-3xl">
            <span onClick={()=>{setList("pending")}} className="cursor-pointer ">Pending</span>
            <span onClick={()=>{setList("processing")}} className="cursor-pointer ">Processing</span>
            <span onClick={()=>{setList("completed")}} className="cursor-pointer ">Completed</span> 
            </div> 
            <br/> 
            <div>
            {(List==="pending")? <PendingLists setErr={props.setErr} setSucc={props.setSucc} setSuccMsg={props.setSuccMsg}/> :(List==="processing")? <ProcessingList setErr={props.setErr} setSucc={props.setSucc} setSuccMsg={props.setSuccMsg} />:<CompletedList/>}
            </div>
        </div>
    )
}

export default WashMenu
