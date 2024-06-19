import { useState } from 'react'
import './App.css'
import usePassGen from './hooks/usePassGen';

function App() {
  const [length, setLength] = useState(6);
  const [checkBoxData, setCheckBoxData] = useState([
    { title: "Uppercase", state: false },
    { title: "Lowercase", state: false },
    { title: "Numbers", state: false },
    { title: "Symbols", state: false },
  ]);

  const [copied, setCopied] = useState(false);

  const checkboxHandler = (i) => {
    const updatedCheckBoxData = [...checkBoxData];
    updatedCheckBoxData[i].state = !updatedCheckBoxData[i].state;
    setCheckBoxData(updatedCheckBoxData);
  }

  const copyHandler = () => {
    navigator.clipboard.writeText(password);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 1000);
  };

  const { password, errorMessage, generatePassword } = usePassGen();

  return (
    <>
      <div className='pass'>
        {/* password text and copy */}
        {password && (
          <div className="header">
            <div className="title">
              {password}
            </div>
            <button className='copyBtn' onClick={copyHandler}>
              {copied ? "copied" : "copy"}
              </button>
          </div>
        )}
        {/* password length */}
        <div className="length">
          <span>
            <label>Password Length</label>
            <label>{length}</label>
          </span>
          <input type="range" min="6" max="20"
            value={length}
            onChange={(e) => setLength(e.target.value)}
          />
        </div>
        <div className="checkboxes">
          {checkBoxData.map((checkbox, index) => {
            return (
              <div key={index}>
                <input type="checkbox" checked={checkbox.state}
                  onChange={() => checkboxHandler(index)} />
                <label>{checkbox.title}</label>
              </div>
            )
          })}
        </div>
        {/* Strength */}
        {/* Error Handling */}
        {errorMessage && <div className="error">{errorMessage}</div>}
        {/* generate button */}
        <button className='generateBtn' onClick={() => generatePassword(checkBoxData, length)}>Generate Password</button>
      </div>

    </>
  )
}

export default App
