import React from 'react'
import Profile from '../components/worker/Profile'
import WashMenu from '../components/worker/WashMenu'
import WorkerImg from '../assets/images/LaundryWorkerProfile.jpg'

const Worker = () => {
    return (
        <div>
            <Profile Img={WorkerImg} name="Natalia Weerasinghe" role="Worker"/>
            <WashMenu/>
        </div>
    )
}

export default Worker
