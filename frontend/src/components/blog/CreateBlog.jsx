import React from 'react'

const CreateBlog = () => {
    return (
        <div className="pt-10">
            <span className="font-bold  text-3xl flex justify-center">Create A Blog</span>
            <div className=" px-44">
            <form className=" pt-10">
                <div className="mb-10">
                <label className="block text-gray-700 text-xl mb-2" for="username">
                    Upload Cover Photo
                </label>
                <button className=" rounded-full font-semibold bg-light-blue shadow-md text-white py-2 px-4" >Choose file</button>
                </div>
                <div className="mb-10">
                <label className="block text-gray-700 text-xl mb-2" for="username">
                    Title
                </label>
                <input required  class="shadow focus:border-light-blue appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text"/>
                </div>
                <div className="mb-10">
                <label className="block text-gray-700 text-xl mb-2" for="username">
                    Brief Introduction
                </label>
                <textarea required class="focus:border-light-blue shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text"/>
                </div>
                <div className="mb-10">
                <label className="block text-gray-700 text-xl mb-2" for="username">
                    Content
                </label>
                <textarea required class="focus:border-light-blue shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text"/>
                </div>
                <div className=" flex justify-end mb-10">
                <button className=" rounded-full  font-medium bg-light-blue shadow-md text-white py-2 px-5 text-xl" >Cancel</button>
                <button className=" ml-5 rounded-full font-medium bg-light-blue shadow-md text-white py-2 px-5 text-xl" type="submit">Publish</button>
                </div>
            </form> 
            </div>
        </div>
    )
}

export default CreateBlog
