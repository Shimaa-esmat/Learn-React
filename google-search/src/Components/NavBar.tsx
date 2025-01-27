import appLogo from '../assets/apps_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.svg';
import { useRef } from 'react';
import AppsModal from './AppModal';
export default function NavBar() {
    const appsRef = useRef<{open: () => void}>(null)

    const handleOpenAppModal = ()=>{
        if (appsRef.current){
            appsRef.current.open()
        }
    }

  return (
    <>
        <AppsModal ref={appsRef}/>
    <header className="flex justify-end py-6 px-4">
        <div className="flex space-x-4 items-center">
        <a href="https://mail.google.com" className="text-gray-700 hover:text-gray-900">
            Gmail
        </a>
        <a href="https://www.google.com/img" className="text-gray-700 hover:text-gray-900">
            Image
        </a>

        <button 
        onClick={handleOpenAppModal}
        className='rounded-full bg-transparent items-center pl-2 w-12 h-12 hover:bg-gray-100 '>

            <img src={appLogo} alt="apps" className="bg-transparent w-8 h-8" />
        </button>
        <button className='py-3 px-6 rounded-full bg-gray-300 hover:bg-gray-400 shadow-md hover:shadow-lg transition-shadow'>
            Sing in
            {/* <img
                src="" 
                alt="account-photo"
                className="w-8 h-8 rounded-full"
            /> */}
        </button>
        </div>
    </header>
    </>

    );
}