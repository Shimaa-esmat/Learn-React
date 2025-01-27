import search from '../assets/search_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.svg'
import mic from '../assets/mic.png'
import lens from '../assets/lens.png'
import google from '../assets/google_logo.svg'
import { useState ,useEffect, useRef } from 'react';



export default function Input(){
    const textareaRef = useRef<HTMLTextAreaElement>(null)
    const requstFocus = ()=>{
        if(textareaRef.current){
            textareaRef.current.focus()
        }
    }
    return(
        <div className='w-5/6 sm:w-2/5 gap-3 flex flex-col justify-center items-center'>
            <img className='w-1/3 sm:w-1/2' src={google} alt='google'/>
        <div 
        className='flex items-center rounded-full  w-full  border border-gray-100 shadow-md hover:shadow-lg transition-shadow'
        >           
        <img 
        onClick={requstFocus}
        src={search} 
        alt='search' 
        className='w-6 h-6 ml-4 hidden sm:block '
        />
            <textarea 
                className='bg-transparent w-full ps-4 pt-2 h-12  focus:outline-none resize-none  overflow-hidden' 
                placeholder="Search Google or type a URL"
                ref={textareaRef}            />            
            <div className='flex space-x-2 mr-4 '>
            <button >
                <img className=' max-w-max h-8' src={mic} alt='mic'/>
            </button>
            <button>
                <img className='max-w-max h-8'  src={lens} alt='lens'/>
            </button>
            </div>

        </div>

        </div>

        
    )
}