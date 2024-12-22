import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="bg-cover bg-center h-screen bg-no-repeat">
        <div className="h-1/10 bg-liberty-navy flex flex-row items-center gap-5 p-5">
          <img className="h-14" src="./public/Liberty_Flames_logo.svg.png" />
          <h1 className="text-sm text-white font-bold sm:text-2xl"> LU Dining Alerts </h1>
        </div>
        <div className="flex items-center justify-center h-9/10 gap-4  bg-[url('./public/dininghall.jpg')] bg-cover bg-center bg-no-repeat">
          <div className="flex flex-col items-center justify-center gap-4 md:flex-row">
            <input
              type="text"
              className="border-2 border-gray-300 rounded-md p-3 w-72 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-liberty-red transition duration-200"
              placeholder="Enter your phone number"
            />
            <button className="rounded-md bg-liberty-red h-12 w-36 text-center text-white font-semibold shadow-md hover:bg-liberty-red-dark hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-liberty-red transition duration-200">
              <h1>Register</h1>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
