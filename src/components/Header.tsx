import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [showAbout, setShowAbout] = useState(false);
  const [showContact, setShowContact] = useState(false);

  return (
    <>
      <header className="border-b border-gray-200 bg-white sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-1">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-12 h-12 rounded-full border-2 border-black bg-white flex items-center justify-center transition-transform group-hover:scale-105">
              <span className="text-sm font-bold text-black tracking-tight">SETO</span>
            </div>
          </Link>

          {/* Navigation */}
          <nav className="flex items-center gap-6">

            <button
              onClick={() => setShowAbout(true)}
              className="text-gray-600 hover:text-gray-900 transition font-medium"
            >
              About
            </button>
            <button
              onClick={() => setShowContact(true)}
              className="text-gray-600 hover:text-gray-900 transition font-medium"
            >
              Contact
            </button>
          </nav>
        </div>
      </header>

      {/* About Modal */}
      {showAbout && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setShowAbout(false)}
        >
          <div 
            className="bg-white rounded-lg shadow-2xl max-w-lg w-full p-8 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowAbout(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-2xl"
            >
              ×
            </button>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">About Me</h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Hi! I'm Joey Seto. I have the privilege to call Vancouver, BC my home.
              </p>
              <p>
                Join me as I document my adventures, from backpacking through the Rocky Mountains to discovering hidden food gems in bustling cities.
              </p>
              <p>
                This blog is a collection of stories, tips, and beautiful moments from my travels 
                around the province, Canada and the world.
              </p>
            </div>
            <button
              onClick={() => setShowAbout(false)}
              className="mt-6 px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition w-full font-semibold"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Contact Modal */}
      {showContact && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setShowContact(false)}
        >
          <div 
            className="bg-white rounded-lg shadow-2xl max-w-lg w-full p-8 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowContact(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-2xl"
            >
              ×
            </button>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Get in Touch</h2>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-gray-700">
                <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                  📧
                </div>
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <a href="mailto:joeylokseto@gmail.com" className="font-medium hover:text-blue-600 transition">
                    joeylokseto@gmail.com
                  </a>
                </div>
              </div>
            </div>
            <button
              onClick={() => setShowContact(false)}
              className="mt-6 px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition w-full font-semibold"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}