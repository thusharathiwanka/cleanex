import React from 'react'

const PendingLists = () => {


    return (
        <div class=" pt-16 pl-60 pr-60">
            <div class="bg-white rounded-xl shadow-2xl p-10" >
                <div class="grid grid-cols-3 divide-x divide-light-blue">
                    <div class="ml-16">
                        <span class="font-semibold">Name</span>
                        <span class="ml-10">Liam Hemsworth</span>
                        <br/>
                        <span class="font-semibold">Date</span>
                        <span class="ml-12">22 july 2021</span>
                        <br/>
                        <span class="font-semibold">Time</span>
                        <span class="ml-12">11:30 AM</span>
                    </div>
                    <div class="relative">
                        <div class="text-center">
                        <span class="font-semibold">Cloths</span>
                        <span class="ml-20 font-semibold">Quantity</span>
                        </div>
                        <span class="ml-20">T-Shirt</span>
                        <span class="absolute  right-28">2</span>
                    </div>
                    <div class="text-center  ">
                        <form action="">
                        <input class=" focus:outline-none  shadow-md py-2 px-4 rounded" placeholder="Hours" type="number" required id="quantity" name="quantity" min="1" max="24"/>
                        <button type="submit" class=" shadow-md bg-light-blue text-white py-2 px-6 rounded font-bold ml-5">
                            Accept
                        </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PendingLists
