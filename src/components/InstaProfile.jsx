import React from 'react'
import { instafollowers } from '../constants'
import { instaProfilePic } from '../assets'


const InstaProfile = ({className,title}) => {
  return (
    <div className={`${className || ''} flex items-center p-4 pr-6 bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl gap-5`}>
        <img src={instaProfilePic} alt="notificationImg" width={62} height={62} className="rounded-full" />
        <div className="flex-1">
            <h6 className="mb-1 font-semibold text-base">{title}</h6>
            <div className="flex items-center justify-between">
                <ul className="flex -m-0.5">
                    {instafollowers.map( (item,index) => (
                        <li key={index} className="flex w-6 h-6 rounded-full overflow-hidden">
                            <img src={item} alt="item" className="w-full relative left-[-2px]" width={20} height={20} />
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    </div>
  )
}

export default InstaProfile
