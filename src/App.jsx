import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='pass'>
        {/* password text and copy */}
        <div className="header">
          <div className="title">
            hbsfjir&#^%
          </div>
          <button className='copyBtn' onClick={{}}>copy</button>
        </div>
        {/* password length */}
        <div className="length">
          <span>
            <label>Character Length</label>
            <label>5</label>
          </span>
        </div>
      </div>
      
    </>
  )
}

export default App
