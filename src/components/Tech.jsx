import React from 'react'
import { TechStacksIcons } from "../constants";


const Tech = ({className}) => {
    return (
        <div className={className}>
            <h5 className="tagline mb-6 text-center text-n-1/50">
            Some of the tech stacks I work with to build awesome sites
            </h5>
            <ul className="flex">
                {TechStacksIcons.map((logo) => (
                    <li
                        className="flex flex-col gap-2 items-center justify-center flex-1 h-[8.5rem]"
                        key={logo.id}
                    >
                        <img src={logo.url} width={60} height={20} alt={logo.name} />
                        <h3 className='text-gray-400 ml-1 hidden md:block' >{logo.name}</h3>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Tech
