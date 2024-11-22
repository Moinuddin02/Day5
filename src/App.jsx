import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const [form, setForm] = useState({})

  const handle = ()=>{
    alert("Clicked Done")
  }

 const change=(e)=>{
  setForm({...form,[e.target.name]:e.target.value})
 }

  return (
    <>
      <div className="button">
        <button onClick={handle} >Click Me</button>

        <input type="text" name='email' value={form.email?form.email:""} onChange={change} />
        <input type="text" name='phone' value={form.phone?form.phone:""} onChange={change} />
      </div>
    </>
  )
}

export default App
