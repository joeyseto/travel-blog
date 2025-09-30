import Link from "next/link";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

type NavItem = {
  label: string;
  href?: string;
  available: boolean;
  children?: NavItem[];
};

const navItems: NavItem[] = [
  { label: "Home", href: "/", available: true },
  { 
    label: "About", 
    href: "/about", 
    available: true 
  },
  { 
    label: "At Home", 
    available: true, 
    children: [
      { label: "BC", href: "/at-home/bc", available: true },
      { label: "ON", href: "/at-home/on", available: true },
      { label: "AB", href: "/at-home/ab", available: true },
      { label: "MB", href: "/at-home/mb", available: true },
      { label: "QC", href: "/at-home/qc", available: true },
      { label: "NFLD", href: "/at-home/nfld", available: true },
    ]
  },
  {
    label: "US",
    available: true,
    children: [
      { label: "CA", href: "/us/ca", available: true },
      { label: "TX", href: "/us/tx", available: true },
      { label: "HI", href: "/us/hi", available: true },
      { label: "NY", href: "/us/ny", available: true },
      { label: "LA", href: "/us/la", available: true },
    ]
  },
  {
    label: "Abroad",
    available: true,
    children: [
      { label: "Japan", href: "/abroad/japan", available: true },
      { label: "Indonesia", href: "/abroad/indonesia", available: true },
      { label: "Vietnam", href: "/abroad/vietnam", available: true },
      { label: "Laos", href: "/abroad/laos", available: true },
      { label: "Taiwan", href: "/abroad/taiwan", available: true },
    ]
  },
];

export default function Navbar() {
  const [active, setActive] = useState("/");
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          {/* Branding */}
          <div className="text-2xl font-extrabold text-blue-600 hover:text-blue-500 transition-colors">
            Joey Seto
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            {navItems.map((item) =>
              item.children ? (
                <div key={item.label} className="relative group">
                  <button
                    className={`px-4 py-2 font-semibold rounded-md transition-colors duration-200 text-gray-700 hover:text-blue-600`}
                  >
                    {item.label}
                  </button>
                  {/* Dropdown */}
                  <div className="absolute left-0 mt-2 w-40 bg-white border rounded-md shadow-lg opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-opacity">
                    {item.children.map((child) =>
                      child.available ? (
                        <Link
                          key={child.label}
                          href={child.href!}
                          onClick={() => setActive(child.href!)}
                          className="block px-4 py-2 text-gray-700 hover:bg-blue-100 hover:text-blue-600"
                        >
                          {child.label}
                        </Link>
                      ) : (
                        <span
                          key={child.label}
                          className="block px-4 py-2 text-gray-400 cursor-not-allowed"
                        >
                          {child.label}
                        </span>
                      )
                    )}
                  </div>
                </div>
              ) : item.available ? (
                <Link
                  key={item.label}
                  href={item.href!}
                  onClick={() => setActive(item.href!)}
                  className={`px-4 py-2 font-semibold rounded-md transition-colors duration-200 ${
                    active === item.href
                      ? "text-white bg-blue-600"
                      : "text-gray-700 hover:text-blue-600 hover:underline"
                  }`}
                >
                  {item.label}
                </Link>
              ) : (
                <span
                  key={item.label}
                  className="px-4 py-2 font-semibold text-gray-400 cursor-not-allowed"
                >
                  {item.label}
                </span>
              )
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="text-gray-700 hover:text-blue-600 focus:outline-none"
            >
              {mobileOpen ? <HiX size={28} /> : <HiMenu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-md">
          {navItems.map((item) =>
            item.children ? (
              <div key={item.label}>
                <div className="px-6 py-3 font-semibold text-gray-700">{item.label}</div>
                <div className="pl-6">
                  {item.children.map((child) =>
                    child.available ? (
                      <Link
                        key={child.label}
                        href={child.href!}
                        onClick={() => setMobileOpen(false)}
                        className="block px-6 py-2 text-gray-700 hover:bg-blue-100 hover:text-blue-600"
                      >
                        {child.label}
                      </Link>
                    ) : (
                      <span
                        key={child.label}
                        className="block px-6 py-2 text-gray-400 cursor-not-allowed"
                      >
                        {child.label}
                      </span>
                    )
                  )}
                </div>
              </div>
            ) : item.available ? (
              <Link
                key={item.label}
                href={item.href!}
                onClick={() => setMobileOpen(false)}
                className="block px-6 py-3 font-semibold text-gray-700 hover:bg-blue-100 hover:text-blue-600"
              >
                {item.label}
              </Link>
            ) : (
              <span
                key={item.label}
                className="block px-6 py-3 font-semibold text-gray-400 cursor-not-allowed"
              >
                {item.label}
              </span>
            )
          )}
        </div>
      )}
    </nav>
  );
}
