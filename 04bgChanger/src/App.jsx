import { useState } from 'react'

function App() {
  const [color, setColor] = useState('grey')

  return (
    <>
      <div className='w-screen h-screen'
      style={{backgroundColor: color}}
      >
        <div className='flex flex-wrap inset-x-0 justify-center items-center'>
          <div className='fixed flex flex-wrap justify-center items-center bottom-14 p-2 gap-2 rounded-lg shadow-xl bg-white'>

          <button className='shadow-lg rounded-full'
           style={{backgroundColor: 'blue'}}
           onClick={() => setColor('blue')}>
            Blue</button>

          <button className='shadow-lg rounded-full'
           style={{backgroundColor: 'red'}}
           onClick={() => setColor('red')}>
            Red</button>

          <button className='shadow-lg rounded-full'
           style={{backgroundColor: 'green'}}
           onClick={() => setColor('green')}>
            Green</button>

          <button className='text-black shadow-lg rounded-full'
           style={{backgroundColor: 'yellow'}}
           onClick={() => setColor('yellow')}>
            Yellow</button>

          <button className='text-black shadow-lg rounded-full'
           style={{backgroundColor: 'white'}}
           onClick={() => setColor('white')}>
            White</button>

          <button className='shadow-lg rounded-full'
           style={{backgroundColor: 'black'}}
           onClick={() => setColor('black')}>
            Black</button>

          <button className='shadow-lg rounded-full'
           style={{backgroundColor: 'purple'}}
           onClick={() => setColor('purple')}>
            Purple</button>

          <button className='shadow-lg rounded-full'
           style={{backgroundColor: 'pink'}}
           onClick={() => setColor('pink')}>
            Pink</button>
          

          </div>
      </div></div>
    </>
  )
}

export default App
