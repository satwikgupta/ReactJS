import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [includeNum, setIncludeNum] = useState(false)
  const [includeSpec, setIncludeSpec] = useState(false)
  let [password, setPassword] = useState("")
  const passwordRef = useRef(null)

  const generatePassword = useCallback(() => {
    let pass = ""
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    if(includeNum) str += "0123456789"
    if(includeSpec) str += "!@#$%^&*()-_=+[]{}|;:,./<>?"

    for(let i = 1; i <= length; i++) {
      pass += str[Math.floor(Math.random() * str.length)]
    }
    setPassword(pass)
    console.log('hit')
  }, [length, includeNum, includeSpec, setPassword])

  const copyPassword = useCallback(() => {
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
    alert('Password copied to clipboard')
  },[password])

  useEffect(()=>{
    generatePassword()
    console.log('generatePassword')
  }, [length, includeNum, includeSpec, generatePassword])

  console.log('password :', password)
  
  return (
    <>
      <div className='w-full max-w-lg mx-auto shadow-md px-4 py-5 rounded-lg bg-gray-600'>
        <h1 className='text-3xl'>Password Generator</h1><br />
        <div className='flex shadow rounded-md overflow-hidden mb-4'>
          <input type="text" value={password} 
          readOnly 
          className='outline-none w-full py-1 px-3 font-semibold text-center text-orange-600' 
          placeholder='Password'
          ref={passwordRef}/>
          <button onClick={copyPassword}
          className='outline-none px-3 py-0.5 bg-blue-700 shrink-0'
          >Copy</button>
        </div>
        <div className='flex text-sm gap-x-2 text-orange-400'>
          <div className='flex items-center gap-x-1'>
            <input type="range" min={8} max={20} value={length}
            onChange={(e) => setLength(e.target.value)}
            className="cursor-pointer" />
            <label>Length: {length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox"  
            defaultChecked={includeNum}
            onChange={(e) => setIncludeNum(e.target.checked)} />
            <label>Numbers</label>
            <input type="checkbox" 
            defaultChecked={includeSpec} 
            onChange={(e) => setIncludeSpec(e.target.checked)} />
            <label>Special Characters</label>
          </div>

        </div>
      </div>
    </>
  )
}

export default App
