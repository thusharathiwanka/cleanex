import React from 'react'



const Profile = (props) => {
    return (
        <div class="md:flex ml-14 rounded-xl p-5 md:p-10">
            <img src={props.Img}  alt='Worker profile' className=" rounded-lg" width='150' height='150'/>
            <div  class="pt-10 pl-8 text-center md:text-left">
            <h2 class="text-2xl font-semibold">{props.name}</h2>
            <h3 class="text-2xl font-normal text-light-blue">{props.role}</h3>
            </div>
            
        </div>
    )
}

export default Profile
