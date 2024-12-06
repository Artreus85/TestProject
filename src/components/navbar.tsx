"use client"

import { useState, useEffect } from "react";
import { auth } from "@/app/FirebaseDB/firebase.config";// Assuming you have Firebase initialized in a file called firebaseConfig
import { useRouter } from 'next/navigation'; // You can use this to redirect after logging out
import Link from 'next/link'; // Import Link from Next.js

const Navbar: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const router = useRouter();

  // Check if the user is logged in using Firebase auth
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setIsLoggedIn(user ? true : false); // If user is logged in, set isLoggedIn to true
    });

    return () => unsubscribe(); // Cleanup on unmount
  }, []);

  // Function to log out the user
  const handleLogout = async () => {
    try {
      await auth.signOut(); // Sign out the user
      setIsLoggedIn(false); // Update the state
      router.push("/login"); // Redirect to login page (optional)
    } catch (error) {
      console.error("Error signing out: ", error); // Handle errors
    }
  };

  const toggleDropdown = () => setDropdownOpen(!isDropdownOpen);
  const closeDropdown = () => setDropdownOpen(false);

  return (
    <nav className="bg-[#457B9D] text-white px-6 py-4">
      <div className="container mx-auto flex justify-between items-center">

        {/* Navigation Links */}
        <div className="flex space-x-36">
          <Link href="/game" className="text-xl font-bold hover:underline"> Пазарувай </Link>
          <Link href="/leaderboard" className="text-xl font-bold hover:underline"> Контакти </Link>
          <Link href="/about-us" className="text-xl font-bold hover:underline"> За нас </Link>
        </div>

        {/* Profile Dropdown */}
        <div className="relative">
          <button
            onClick={toggleDropdown}
            className="flex items-center focus:outline-none transition duration-300"
          >
            <img
              src={isLoggedIn ? "/navbar_logged_account_menu_icon.png" : "./navbar_unlogged_account_menu_icon.png"}
              alt="Account menu button"
              width={56}
              height={56}
              className="max-w-10"
            />
          </button>

          {isDropdownOpen && (
            <div
              className="absolute right-0 mt-2 w-48 bg-[#FFF9F5] text-[#1D3557] rounded-lg shadow-lg overflow-hidden z-10"
              onMouseLeave={closeDropdown}
            >
              {isLoggedIn ? (
                <button
                  onClick={handleLogout}
                  className="block w-full text-left px-4 py-3 text-lg font-semibold hover:bg-[#A8DADC] hover:text-[#457B9D] transition duration-300"
                >
                  Изход
                </button>
              ) : (
                <div>
                  <Link href="/login" className="block px-4 py-3 text-lg font-semibold hover:bg-[#A8DADC] hover:text-[#457B9D] transition duration-300">
                      Вход
                  </Link>

                  <Link href="/register" className="block px-4 py-3 text-lg font-semibold hover:bg-[#A8DADC] hover:text-[#457B9D] transition duration-300">
                      Регистрация
                  </Link>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;