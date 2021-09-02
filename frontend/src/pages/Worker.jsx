import React, { useState } from 'react'
import Profile from '../components/worker/Profile'
import WashMenu from '../components/worker/WashMenu'
import WorkerImg from '../assets/images/LaundryWorkerProfile.jpg'
import Error from '../components/toasts/Error'
import Success from '../components/toasts/Success'

const Worker = () => {

    const [Err, setErr] = useState("")
    const [Succ, setSucc] = useState("")

    return (
        <div>
            {(Err&&<Error error={"Oops! Somthing went wrong"}/>)}
            {(Succ&&<Success success={"successfully changed status"}/>)}
            <Profile Img={WorkerImg} name="Natalia Weerasinghe" role="Worker"/>
            <WashMenu setErr={setErr} setSucc={setSucc}  />
        </div>
    )
}

export default Worker
