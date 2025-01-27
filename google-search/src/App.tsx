import React from 'react';
import NavBar from './Components/NavBar';
import Input from './Components/Input';
import './App.css';

function App() {
  return (
    <>
    <NavBar/>
    <div className='py-28 mx-auto max-w-8xl sm:px-6  flex justify-center items-center'>
    <Input/>
    </div>
    </>

    
  );
}

export default App;
