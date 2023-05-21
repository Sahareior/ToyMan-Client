
import { useEffect } from 'react';
import './App.css'
import Home from './Components/Layout/Home'
import Footer from './Components/Shared/Footer'

function App() {

  useEffect(() => {
    window.process = {
      ...window.process,
    };
  }, []);
  return (
    <div className='w-11/12 mx-auto'>
    <Home></Home>
    <Footer></Footer>
    </div>
  )
}

export default App
