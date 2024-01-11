import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  
  let myObj = {
    username : "Vasim",
    age : 35
  }
  let myArr = [1, 2, 3  ]
  return (
    <>     
      <h3 className='text-2xl rounded-xl text-black p-3 bg-green-400 mb-4'>Tailwind css</h3>
      <Card username='Vasim' btnText="Click me" description="Lorem ipsum dolor sit" theImage='https://www.pexels.com/photo/empty-highway-overlooking-mountain-under-dark-skies-1955134/'/>
      <Card username="Vasim Sayyad"  description="A met consectetur adipisicing elit" theImage='https://www.pexels.com/photo/person-sitting-on-mountain-cliff-1659438/'/>
    </> 
  )
}
export default App
 