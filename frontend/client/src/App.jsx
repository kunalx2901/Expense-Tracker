
import {useState} from 'react'
import Navigation from "./Components/Navigation"
import Orb from "./Components/Orb"
import Main from './Components/Main'


function App() {

  const [active,setActive] =  useState(1)

  return (
    <>
    <Orb/>
    <div className='flex gap-5'>
    <Navigation active={active} setActive={setActive}/>
    <Main/>
    </div>
    </>
  )
}

export default App
