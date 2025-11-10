'use client';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');

  useEffect(() => {
    // Check if user is logged in (check sessionStorage, localStorage, or Redux)
    const user = sessionStorage.getItem('user');
    if (user) {
      const userData = JSON.parse(user);
      setIsLoggedIn(true);
      setUsername(userData.name || userData.email);
    }
  }, []);

  const handleNavigation = (path: string) => {
    router.push(path);
  };

  const handleLogout = () => {
    // Clear user data
    sessionStorage.removeItem('user');
    sessionStorage.removeItem('token');
    setIsLoggedIn(false);
    setUsername('');
    router.push('/');
  };

  return (
    <>
      {/* Desktop Navbar */}
      <nav
        className="hidden md:flex bg-darkGreen text-white p-4"
        style={{ zIndex: 5000, position: 'relative' }}
      >
        {/* Center Navigation Menu */}
        <ul className="flex space-x-6 mx-auto">
          <li>
            <button onClick={() => handleNavigation('/')} className="hover:text-brightRed">
              Home
            </button>
          </li>
          <li>
            <button onClick={() => handleNavigation('/about/')} className="hover:text-brightRed">
              About
            </button>
          </li>
          <li>
            <button onClick={() => handleNavigation('/events/')} className="hover:text-brightRed">
              Events
            </button>
          </li>
          <li>
            <button onClick={() => handleNavigation('/gallery/')} className="hover:text-brightRed">
              Gallery
            </button>
          </li>
          <li>
            <button onClick={() => handleNavigation('/sevas/')} className="hover:text-brightRed">
              Daily Services
            </button>
          </li>
          <li>
            <button onClick={() => handleNavigation('/priests/')} className="hover:text-brightRed">
              Priest Services
            </button>
          </li>
          <li>
            <button onClick={() => handleNavigation('/services/')} className="hover:text-brightRed">
              All Services
            </button>
          </li>
          <li>
            <button onClick={() => handleNavigation('/donate/')} className="hover:text-brightRed">
              Donations
            </button>
          </li>
          <li>
            <button onClick={() => window.location.href = '#Contact'} className="hover:text-brightRed">
              Contact
            </button>
          </li>
              <li>
                <button onClick={() => handleNavigation('/faq/')} className="hover:text-brightRed">
                  FAQ
                </button>
              </li>
          {!isLoggedIn && (
            <>
              <li>
                <button onClick={() => handleNavigation('/login/')} className="hover:text-brightRed">
                  Login
                </button>
              </li>
              <li>
                <button onClick={() => handleNavigation('/register/')} className="hover:text-brightRed">
                  Register
                </button>
              </li>
            </>
          )}
        </ul>

        {/* Right Side - Logout Button (Absolute Position) */}
        {isLoggedIn && (
          <div className="absolute right-4 top-1/2 transform -translate-y-1/2 flex items-center space-x-3">
            <span className="text-white font-medium">
              {username}
            </span>
            <button
              onClick={handleLogout}
              className="bg-brightRed hover:bg-red-700 text-white px-4 py-2 rounded transition-colors"
            >
              Logout
            </button>
          </div>
        )}
      </nav>

      {/* Mobile Bottom Navbar */}
      <nav
        className="fixed bottom-0 left-0 right-0 bg-darkGreen text-white flex justify-around p-4 md:hidden"
        style={{ zIndex: 50 }}
      >
        <button
          onClick={() => handleNavigation('/')}
          className="flex flex-col items-center text-white hover:text-brightRed"
        >
          <i className="fas fa-home text-2xl"></i>
          <span className="text-sm">Home</span>
        </button>
        <button
          onClick={() => handleNavigation('/sevas/')}
          className="flex flex-col items-center text-white hover:text-brightRed"
        >
          <i className="fas fa-praying-hands text-2xl"></i>
          <span className="text-sm">Sevas</span>
        </button>
        <button
          onClick={() => handleNavigation('/events/')}
          className="flex flex-col items-center text-white hover:text-brightRed"
        >
          <i className="fas fa-calendar-alt text-2xl"></i>
          <span className="text-sm">Events</span>
        </button>
        <button
          onClick={() => handleNavigation('/priests/')}
          className="flex flex-col items-center text-white hover:text-brightRed"
        >
          <i className="fas fa-user text-2xl"></i>
          <span className="text-sm">Poojas</span>
        </button>
        <button
          onClick={() => handleNavigation('/gallery/')}
          className="flex flex-col items-center text-white hover:text-brightRed"
        >
          <i className="fas fa-images text-2xl"></i>
          <span className="text-sm">Gallery</span>
        </button>
        
        {/* Mobile Auth Button */}
        {isLoggedIn ? (
          <button
            onClick={handleLogout}
            className="flex flex-col items-center text-white hover:text-brightRed"
          >
            <i className="fas fa-sign-out-alt text-2xl"></i>
            <span className="text-sm">Logout</span>
          </button>
        ) : (
          <button
            onClick={() => handleNavigation('/login/')}
            className="flex flex-col items-center text-white hover:text-brightRed"
          >
            <i className="fas fa-sign-in-alt text-2xl"></i>
            <span className="text-sm">Login</span>
          </button>
        )}
      </nav>
    </>
  );
}