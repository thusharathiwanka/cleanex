import React from 'react'
import WorkerImg from '../../assets/images/LaundryWorkerProfile.jpg'

const Profile = () => {
    return (
        <div class="md:flex  rounded-xl p-8 md:p-10">
            <img src={WorkerImg}  alt='Worker profile' width='150' height='150'/>
            <div  class="pt-10 pl-8 text-center md:text-left">
            <h2 class="text-2xl font-semibold">Natalia Weerasinghe</h2>
            <h3 class="text-2xl font-normal text-light-blue">Worker</h3>
            </div>
            
        </div>
    )
}

export default Profile
