import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Error from '../toasts/Error'
import Success from '../toasts/Success'

const EditBlog = () => {

const [CurrentDetails, setCurrentDetails] = useState("")
const [Blog, setBlog] = useState("")
const [Err, setErr] = useState("")
const [Succ, setSucc] = useState("")

useEffect(async() => {

    const res = await axios.get("")
    
}, [])

const updateBlog =async(e)=>{
    e.preventDefault()

    try{
    const res =await axios.patch("/blog/get")
    if(res.status===200){
        setSucc(true)
    }
    }catch(err){
        setErr(true)
        console.log(err);
    }
}
    return (
        <div className="pt-10">
            {(Err&&<Error error={"Oops! Somthing went wrong"}/>)}
            {(Succ&&<Success success={"Update Successful"}/>)}
            <span className="font-bold  text-3xl flex justify-center">Edit A Blog</span>
            <div className=" px-44">
            <form onSubmit={updateBlog} className=" pt-10">
                <div className="mb-10">
                <label className="block text-gray-700 text-xl mb-2" for="username">
                    Title
                </label>
                <input onChange={(e)=>setBlog({...Blog,topic: e.target.value})} required  class="shadow focus:border-light-blue appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text"/>
                </div>
                <div className="mb-10">
                <label className="block text-gray-700 text-xl mb-2" for="username">
                    Brief Introduction
                </label>
                <textarea onChange={(e)=>setBlog({...Blog,description: e.target.value})} required class="focus:border-light-blue shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text"/>
                </div>
                <div className="mb-10">
                <label className="block text-gray-700 text-xl mb-2" for="username">
                    Content
                </label>
                <textarea onChange={(e)=>setBlog({...Blog,content: e.target.value})} required class="focus:border-light-blue shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text"/>
                </div>
                <div className=" flex justify-end mb-10">
                <Link to="/auth/user/blogs">
                <button className=" rounded-full  font-medium bg-light-blue shadow-md text-white py-2 px-5 text-xl" >Cancel</button>
                </Link>
                <button className=" ml-5 rounded-full font-medium bg-light-blue shadow-md text-white py-2 px-5 text-xl" type="submit">Edit</button>
                </div>
            </form> 
            </div>
        </div>
    )
}

export default EditBlog
