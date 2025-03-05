import { useState } from 'react'
import './App.css'

function App() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handlePhoneNumberChange = (e) => {
    let formatted = e.target.value.replace(/\D/g, '');
    if (formatted.length > 10) formatted = formatted.slice(0, 10);
    
    if (formatted.length > 0) {
      if (formatted.length <= 3) {
        formatted = `(${formatted}`;
      } else if (formatted.length <= 6) {
        formatted = `(${formatted.slice(0,3)}) ${formatted.slice(3)}`;
      } else {
        formatted = `(${formatted.slice(0,3)}) ${formatted.slice(3,6)}-${formatted.slice(6)}`;
      }
    }
    
    setPhoneNumber(formatted);
  };

  const handleSubmit = () => {
    const cleanedNumber = phoneNumber.replace(/\D/g, '');
    if (cleanedNumber.length === 10) {
      setIsSubmitted(true);
    } else {
      alert('Please enter a valid 10-digit phone number.');
    }
  };

  return (
    <div className="min-h-screen bg-cover bg-center bg-no-repeat" 
         style={{backgroundImage: "url('/dininghall.jpg')"}}>
      <div className="bg-liberty-navy bg-opacity-95 flex items-center gap-5 p-4 shadow-md">
        <img 
          src="/Liberty_Flames_logo.svg.png" 
          alt="Liberty University Logo" 
          className="h-12 w-12 object-contain"
        />
        <h1 className="text-white font-bold text-xl md:text-2xl tracking-tight">
          LU Dining Alerts
        </h1>
      </div>

      <div className="flex items-center justify-center min-h-[calc(100vh-80px)] p-4">
        <div className="w-full max-w-4xl flex flex-col md:flex-row items-center justify-center gap-8">
          <div className="w-full md:w-1/2 bg-gradient-to-br from-liberty-red/90 to-liberty-navy/90 
                          rounded-xl shadow-2xl p-6 border-2 border-white/20 
                          transform transition-all duration-300 hover:scale-105">
            <h2 className="text-white text-2xl font-bold mb-4 tracking-wide">
              LU Dining Alerts
            </h2>
            <p className="text-white text-base leading-relaxed opacity-90">
              Never miss a meal! Sign up to receive daily dining hall menus directly to your phone. 
              Stay informed about today's menu options with just a click.
            </p>
          </div>

          <div className="w-full md:w-1/2 bg-white/90 rounded-xl shadow-2xl p-6 
                          border-2 border-liberty-red/30 transform transition-all duration-300 hover:scale-105">
            {!isSubmitted ? (
              <div className="space-y-4">
                <input
                  type="tel"
                  value={phoneNumber}
                  onChange={handlePhoneNumberChange}
                  placeholder="(___) ___-____"
                  className="w-full p-3 border-2 border-liberty-red/50 rounded-lg 
                             focus:ring-2 focus:ring-liberty-red focus:border-transparent 
                             transition duration-300 text-gray-700"
                  maxLength="14"
                />
                <button 
                  onClick={handleSubmit}
                  className="w-full bg-gradient-to-r from-liberty-red to-red-600 
                             text-white font-bold py-3 rounded-lg 
                             hover:from-liberty-red-dark hover:to-red-800 
                             transition-all duration-500 
                             transform active:scale-95 
                             focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-liberty-red"
                >
                  Sign Up for Alerts
                </button>
              </div>
            ) : (
              <div className="text-center space-y-4 text-liberty-navy">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 24 24" 
                  className="w-16 h-16 mx-auto text-green-500"
                  fill="currentColor"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
                <h3 className="text-xl font-bold">Success!</h3>
                <p>You'll now receive dining hall menu alerts.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default App