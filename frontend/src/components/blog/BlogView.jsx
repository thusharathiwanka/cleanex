import React from 'react'
import {IoAddCircle} from 'react-icons/io5'
import {BsCalendar} from 'react-icons/bs'
import {RiDeleteBin6Line} from 'react-icons/ri'
import {FiEdit3} from 'react-icons/fi'
import BlogImg from '../../assets/images/blog.png'
import Blog1 from '../../assets/images/blog1.png'
import Blog2 from '../../assets/images/blog2.png'
import Blog3 from '../../assets/images/blog3.png'

const BlogView = () => {
    return (
        <div className="relative pb-20">
            <img src={BlogImg} alt='blog' className=" w-full" />
            <IoAddCircle className=" cursor-pointer text-light-blue inline transform hover:scale-110 motion-reduce:transform-none w-28 h-28 fixed right-10 bottom-10"/>
                <h1 className=" text-6xl font-bold text-white absolute top-36 left-20">Our Blogs</h1>

                <div className="grid grid-cols-3 gap-x-32 px-40 pt-10">
                    <div className=" overflow-hidden rounded-xl shadow-lg ">
                        <img src={Blog1} alt='blog' width="411" height="264" />
                        <div className="px-10 pt-2 pb-5">
                            <BsCalendar  className=" text-light-blue inline"/>
                            <span className="ml-2 text-sm">May 22 2021</span>
                            <br/>
                            <span className="pt-2 font-bold">Reasons to Hire a Professional Cleaning Service.</span>
                            <br/>
                            <span className="pt-2">When it comes to stains, there are some instances where it is better to let your dry cleaner do the work.</span>
                            <br/><br/>
                            <hr/>
                            <div className="pt-2" >
                            <span className="text-light-blue cursor-pointer">Read More</span>
                            <div className=" ml-44 inline-block">
                                <FiEdit3 className="cursor-pointer text-yellow-600 inline transform hover:scale-110 motion-reduce:transform-none w-6 h-6" />
                                <RiDeleteBin6Line className="cursor-pointer ml-2 text-red-600 transform hover:scale-110 motion-reduce:transform-none w-6 h-6 inline"/>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className=" overflow-hidden rounded-xl shadow-lg">
                        <img src={Blog2} alt='blog' width="411" height="264" className=" " />
                        <div className="px-10 pt-2 pb-5">
                            <BsCalendar  className=" text-light-blue inline"/>
                            <span className="ml-2 text-sm">May 10 2021</span>
                            <br/>
                            <span className="pt-2 font-bold">A Guide to Doing Laundry and Finding the Best Local Laundromat Near You.</span>
                            <br/>
                            <span className="pt-2">Finding the best laundromat near you isn’t as simple as just looking for a local location and heading over.</span>
                            <br/><br/>
                            <hr/>
                            <div className="pt-2" >
                            <span className="text-light-blue cursor-pointer">Read More</span>
                            <div className=" ml-44 inline-block">
                                <FiEdit3 className="cursor-pointer text-yellow-600 inline transform hover:scale-110 motion-reduce:transform-none w-6 h-6" />
                                <RiDeleteBin6Line className="cursor-pointer ml-2 text-red-600 transform hover:scale-110 motion-reduce:transform-none w-6 h-6 inline"/>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className="overflow-hidden rounded-xl shadow-lg ">
                        <img src={Blog3} alt='blog' width="411" height="264" className=" " />
                    
                    <div className="px-10 pt-2 pb-5">
                            <BsCalendar  className=" text-light-blue inline"/>
                            <span className="ml-2 text-sm">May 2 2021</span>
                            <br/>
                            <span className="pt-2 font-bold">101 Lanundry tips, tricks and hacks.</span>
                            <br/>
                            <span className="pt-2">When it comes to laundry, we know a thing or two. Here’s a list of 101 of our favorite tips, tricks and hacks to help make getting the ...</span>
                            <br/><br/>
                            <hr/>
                            <div className="pt-2" >
                            <span className="text-light-blue cursor-pointer">Read More</span>
                            <div className=" ml-44 inline-block">
                                <FiEdit3 className="cursor-pointer text-yellow-600 inline transform hover:scale-110 motion-reduce:transform-none w-6 h-6" />
                                <RiDeleteBin6Line className="cursor-pointer ml-2 text-red-600 transform hover:scale-110 motion-reduce:transform-none w-6 h-6 inline"/>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default BlogView