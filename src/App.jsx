import { useState } from 'react';
import './styles/App.css';
import Footer from './component/Footer.jsx';
import Result from './component/Result.jsx';
import Form from './component/Form.jsx';


function App() {

  return (
    <>
      <div className='flex flex-col min-h-screen w-96 bg-white h-11'>
        <Form />
        <Result />
      </div>
      <Footer />
    </>
  )
}

export default App
