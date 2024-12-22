import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="bg-cover bg-center h-full bg-no-repeat">
      <div className="h-1/10 bg-liberty-navy flex flex-row items-center gap-5 p-5">
        <img className="h-14" src="./public/Liberty_Flames_logo.svg.png" />
        <h1 className="text-sm text-white font-bold sm:text-2xl"> LU Dining Alerts </h1>
      </div>
      <div className="flex items-center justify-center h-9/10 gap-4 bg-[url('./public/dininghall.jpg')] bg-cover bg-center bg-no-repeat">
        <div className="flex flex-col items-center justify-center gap-6 md:flex-row px-4">
          <div className="text-center sm:text-left sm:w-96 text-white mb-8 bg-gradient-to-r from-liberty-red to-liberty-navy  rounded-lg shadow-lg p-6 px-10">
            <h2 className="text-xl font-semibold mb-4 tracking-tight">Register for Dining Alerts</h2>
            <p className="text-base sm:text-md leading-relaxed">
              Stay informed about your college's dining options! Sign up to receive a direct link to the daily dining hall menu via text message. By registering, you'll get quick and easy access to the menu, ensuring you're always in the know about what's being served!
            </p>
          </div>
          <div className="flex flex-col items-center justify-center gap-4 w-full">
            <input
              type="text"
              className="border-2 border-gray-300 rounded-md p-3 w-72 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-liberty-red transition duration-200"
              placeholder="Enter your phone number"
            />
            <button className="rounded-lg h-12 w-36 text-center text-white font-semibold shadow-md hover:bg-liberty-red-dark hover:brightness-110 bg-gradient-to-r from-liberty-red to-red-600 hover:from-liberty-red-dark hover:to-red-800 transition-all duration-300 ease-in-out">
              <h1>Sign Up</h1>
            </button>
          </div>
        </div>
      </div>
    </div>

  )
}

export default App
