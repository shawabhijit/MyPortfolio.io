import React from 'react'
import { loading } from "../assets";

const FollowMe = ({className}) => {
    return (
        <div>
            <div className={`flex items-center h-[3.5rem] px-6 bg-n-8/80 rounded-[1.7rem] ${className || ''} text-base`}>
                <img src={loading} alt="loading"
                    className="w-5 h-5 mr-4 "
                />
                Follow Me on this Platfroms
            </div>
        </div>
    )
}

export default FollowMe
