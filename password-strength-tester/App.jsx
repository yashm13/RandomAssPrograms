import pizza from './assets/Pizza.jpeg'
import './App.css'
import { motion } from 'framer-motion'
import { useState } from 'react'
import Svg from './components/Svg'
function App() {

  const [password,setPassword] = useState(null)

  function checkStrength(){
    // copied from ChatGpt 
    let strength = 0;
    if (password.length > 7) strength += 1; // Length check
    if (/[A-Z]/.test(password)) strength += 1; // Uppercase letter check
    if (/[a-z]/.test(password)) strength += 1; // Lowercase letter check
    if (/[0-9]/.test(password)) strength += 1; // Number check
    if (/[^A-Za-z0-9]/.test(password)) strength += 1; // Special character check
    if(password.length > 16) strength += 1
    switch (strength) {
      case 0:
      case 1:
      case 2:
          return 'Weak';
      case 3:
      case 4:
          return 'Medium';
      case 5:
          return 'Strong';
      default:
          return '';
  }
    };


  function textColor(){
    switch (checkStrength()){
      case 'Weak':
        return 'white'
      case 'Medium':
        return 'yellow'
      case 'Strong':
        return '#00ff00'
      default:
        return 'black'
    } 
  }





  return (
   
    <div className='h-screen  w-full bg-red-600'>

    <Svg/>

    <div className=' w-[100rem] h-full  py-[20vh]  m-auto'> 
    
    <div className=" h-[60vh] flex justify-evenly items-center py-[6rem]">

    <div className='flex-col   justify-start items-center   basis-2/5'>
      <h1 className=' text-4xl text-amber-400 font-bold  '>Password Strength  💪  </h1>
      <input onChange={(e) => setPassword(e.target.value)} className='h-16 w-[80%] rounded-xl px-4  outline-none focus:border-amber-400 border-4  ' />
      <h1 className='py-3 px-1 text-xl '
          style={{ color :textColor() }}
      > {checkStrength()} </h1>
    </div>

    {/* animated pixxa */}
      <motion.div
      animate={{ rotate:720 }}
      whileHover={ {rotate:0 , scale:1.3}}
      transition={{ duration:3, repeat:Infinity ,ease:"linear"}}
      className='bg-yellow-400 h-[30rem] w-[30rem]   rounded-full border-black' 
    > <img alt="myImg" src={pizza} className="basis-2/4 rounded-full bg-yellow-400  " /></motion.div>
    </div>
    </div>

    




    </div>
   
  )
}

export default App
