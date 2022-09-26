import { useState } from 'react'

function App() {
  const [count, setCount] = useState<number>(0);

  return (
    <div className='grid h-screen place-items-center'>
      <button className='bg-lime-300 border-2 border-r-emerald-300 p-2 font-bold rounded-lg active:translate-y-1' onClick={() => setCount(prevCount => prevCount + 1)}>
        Click to count up: {count}
      </button>
    </div>
  )
}

export default App
