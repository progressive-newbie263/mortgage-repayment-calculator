import { useState } from 'react';
import './styles/App.css';
import Footer from './component/Footer.jsx';
import Result from './component/Result.jsx';
import Form from './component/Form.jsx';


function App() {

  return (
    <>
      <div className='flex flex-col justify-center h-fit w-96 bg-white 
        rounded-2xl my-10 
      '>
        <Form />
        <Result />
      </div>

      <Footer />
    </>
  )
}

export default App
