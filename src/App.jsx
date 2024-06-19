import { useState } from 'react'
import './App.css'

function App() {
  const checkBoxData = [
    { title: "Uppercase", state: false },
    { title: "Lowercase", state: false },
    { title: "Numbers", state: false },
    { title: "Symbols", state: false },
  ];

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
          <input type="range" min="4" max="20" 
          // value={}
          // onChange={{}} 
          />
        </div>
        {/* Checkboxes */}

        <div className="checkboxes">
          {checkBoxData.map((checkbox, index) => {
            return (
              <div key={index}>
                <input type="checkbox" checked={checkbox.state}
                onChange={{}} />
                <label>{checkbox.title}</label>
              </div>
            )
          })}
        </div>
          {/* Strength */}

          {/* generate button */}
          <button className='generateBtn' onClick={() => {}}>Generate Password</button>
      </div>
      
    </>
  )
}

export default App
