import React from 'react'
import Blog1 from '../../assets/images/blog1.png'

import {ImFacebook,ImTwitter} from 'react-icons/im'
import {FaLinkedinIn,FaInstagram} from 'react-icons/fa'


const SingleBlog = () => {
    return (
        <div>
            <img src={Blog1} alt="blog_1_cover_photo " className=" h-96 w-full object-cover" />
            <span className="pt-5 flex justify-center font-bold text-3xl">Reasons to Hire a Professional Cleaning Service.</span>
            <div className="grid grid-cols-2 pr-96 mr-56 gap-0">
                    <div className="  mt-5  ml-auto">
                        <label className=" text-lg ">Share</label>
                        <ImFacebook className="  w-10 h-10 text-light-blue mt-5"/>
                        <ImTwitter className="w-10 h-10 text-light-blue mt-5"/>
                        <FaLinkedinIn className=" w-10 h-10 text-light-blue mt-5"/>
                        <FaInstagram className=" w-10 h-10 text-light-blue mt-5"/>
                    </div>
                    <div className=" pl-5 mt-5 ">
                        <label className="text-lg">Rapidiously implement premier collaboration and idea-sharing via end-to-end content. Intrinsicly conceptualize accurate information via multidisciplinary methods of empowerment. Professionally promote top-line imperatives with one-to-one markets. 
                            Synergistically utilize customized infrastructures without emerging manufactured products. Energistically leverage existing emerging products before alternative markets. Dramatically exploit resource sucking resources via open-source deliverables. 
                            Quickly integrate interoperable synergy vis-a-vis impactful applications. Distinctively orchestrate world-class methods of empowerment for customer directed materials. Synergistically drive sustainable meta-services rather than market-driven total linkage. 
                            Efficiently streamline multifunctional relationships. Seamlessly provide access to process-centric paradigms vis-a-vis plug-and-play models. Objectively productize next-generation expertise without just in time e-services. 
                            Conveniently underwhelm enterprise-wide supply chains whereas emerging methods of empowerment. Energistically re-engineer goal-oriented supply chains and 24/7 supply chains. Seamlessly supply end-to-end portals after vertical deliverables.
                            Seamlessly provide access to process-centric paradigms vis-a-vis plug-and-play models. Objectively productize next-generation expertise without just in time e-ser- vices. Conveniently underwhelm enterprise-wide supply chains whereas.
                            Rapidiously implement premier collaboration and idea-sharing via end-to-end content. Intrinsicly conceptualize accurate information via multidisciplinary methods of empowerment. Professionally promote top-line imperatives with one-to-one markets. Synergistically utilize</label>
                    </div>
            </div>
        </div>
    )
}

export default SingleBlog