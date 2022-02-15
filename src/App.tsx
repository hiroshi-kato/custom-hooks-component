import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={()=>setCount(prev=>prev+1)}>plus!</button>
    </div>
  )
}

export default App
