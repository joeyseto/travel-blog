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
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-5"
          onClick={() => setShowAbout(false)}
        >
          <div 
            className="bg-white rounded-lg shadow-2xl max-w-4xl w-full p-8 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowAbout(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-2xl"
            >
              ×
            </button>
            <h2 className="text-xl font-bold text-gray-900 mb-4">About Me</h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">

              <img 
              src="/images/GettingStartedGuide/assiniboine.jpg" 
              alt="Complete backpacking gear laid out"
              className="w-1/2 mx-auto rounded-lg shadow-lg my-8"
              />
              <p>
                Hi! I'm Joey Seto. Welcome to my guide on all things backcountry!
              </p>
              <p>
                Growing up, my family and I had never gone camping - not even once. 
                
                As a first-generation immigrant family, my parents often worked their tails off to put food on the table and back then, most leisure activities required both time and money — two things they didn't have much of. 
              </p>
              <p>
                Still, I always loved being outdoors. I grew up in the suburbs of Toronto where there was plenty of greenspace. Some of my fondest memories as a kid were simply spending time with family at the park and by the lake. 
                It wasn't until my mid-twenties that I finally discovered backpacking and went camping for the first time. This is when I realized what I'd been missing my whole life.
              </p>
              
              <p>
                Fast forward a decade later, my passion for the outdoors has only grown. I've spent the better part of my adult life building knowledge and experience in the backcountry - multiday backpacking trips around the Canadian Rockies, portaging in Ontario and BC, and even travelling internationally to do a multiday summit.
              </p>

              <p>
              This guide is for anyone curious about getting started with backpacking, particularly for those who may not have generations of passed on gear, experience or even knowledge to get started.
              My hope is that this becomes a resource for you to use and to make the backcountry more accessible. 
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
                 <p>
                Got a question? Want to provide feedback? Want to partner? 
                Feel free to drop me an email with whatever is on your mind.            
                </p>
                <p>
                &nbsp;
                </p>
            <div className="space-y-5">
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