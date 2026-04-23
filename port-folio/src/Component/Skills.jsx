import React from 'react'
import { FaReact } from "react-icons/fa";
function Skills() {
  return (
    <div className = "h-screen bg-linear-to-bl  to-blue-700 from-black items-center grid grid-cols-2 place-items-center">
        <div className='border-2 p-3 w-7/12 h-6/12 flex flex-col items-center justify-center rounded-3xl  shadow-lg shadow-black '> 
             <h3 className='font-bold text-white text-[20px] underline pb-3'>Programming Languages</h3>
            <ul>
            <li className='text-gray-400 font-semibold text-[18px] flex gap-2'>🔸 Java</li>
            <li className='text-gray-400 font-semibold text-[18px] flex gap-2'>🔸 C</li>
            <li className='text-gray-400 font-semibold text-[18px] flex gap-2'>🔸 DSA</li>
            <li className='text-gray-400 font-semibold text-[18px] flex gap-2'>🔸 OOP</li>
            <li className='text-gray-400 font-semibold text-[18px] flex gap-2'>🔸 DSA</li>
            </ul>
        </div>

         <div className='border-2 p-3 w-7/12 h-6/12 flex flex-col items-center justify-center rounded-3xl  shadow-lg shadow-black '>
            <h3 className='font-bold text-white text-[20px] underline pb-3'>Backend Development</h3>
           <ul>
            <li className='text-gray-400 font-semibold text-[18px] flex gap-2'>🔸 Spring Boot</li>
            <li className='text-gray-400 font-semibold text-[18px] flex gap-2'>🔸 REST Api</li>
          </ul> 
         </div>
            
         <div className='border-2 p-3 w-7/12 h-6/12 flex flex-col items-center justify-center rounded-3xl  shadow-lg shadow-black '>
              <h3 className='font-bold text-white text-[20px] underline pb-3'>Frontend development</h3>
             <ul>
              <li className='text-gray-400 font-semibold text-[18px] flex gap-2'>🔸  React.js </li>
              <li className='text-gray-400 font-semibold text-[18px] flex gap-2'>🔸 HTML, CSS</li>
              <li className='text-gray-400 font-semibold text-[18px] flex gap-2'>🔸 Tailwind CSS</li>
             </ul>
         </div>

         <div className='border-2 p-3 w-7/12 h-6/12 flex flex-col items-center justify-center rounded-3xl  shadow-lg shadow-black '>
             <h3 className='font-bold text-white text-[20px] underline pb-3'>Tools </h3>
              <ul>
                <li className='text-gray-400 font-semibold text-[18px]'>🔸 Git & Github</li>
                <li className='text-gray-400 font-semibold text-[18px]'>🔸 Intellij / VS code</li>
              </ul>
             
         </div>
    </div>
    
  )
}

export default Skills