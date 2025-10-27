import Link from "next/link";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import IconButton from "./IconButton";

type NavItem = {
  label: string;
  href?: string;
  children?: NavItem[];
};

const NAV: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "At Home",
    children: [
      { label: "BC", href: "/at-home/bc" },
      { label: "ON", href: "/at-home/on" },
      { label: "AB", href: "/at-home/ab" },
      { label: "MB", href: "/at-home/mb" },
      { label: "QC", href: "/at-home/qc" },
      { label: "NFLD", href: "/at-home/nfld" },
    ],
  },
  {
    label: "US",
    children: [
      { label: "CA", href: "/us/ca" },
      { label: "TX", href: "/us/tx" },
      { label: "HI", href: "/us/hi" },
      { label: "NY", href: "/us/ny" },
      { label: "LA", href: "/us/la" },
    ],
  },
  {
    label: "Abroad",
    children: [
      { label: "Japan", href: "/abroad/japan" },
      { label: "Indonesia", href: "/abroad/indonesia" },
      { label: "Vietnam", href: "/abroad/vietnam" },
      { label: "Laos", href: "/abroad/laos" },
      { label: "Taiwan", href: "/abroad/taiwan" },
    ],
  },
  { label: "About", href: "/about" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16">
          <div className="text-xl md:text-2xl font-extrabold text-blue-600">Joey Seto</div>

          <nav className="hidden md:flex items-center space-x-6">
            {NAV.map((item) =>
              item.children ? (
                <div key={item.label} className="relative group">
                  <button className="px-3 py-2 rounded-md font-medium text-gray-700 hover:text-blue-600">
                    {item.label}
                  </button>
                  <div className="absolute left-0 mt-2 w-44 bg-white border rounded-md shadow-lg opacity-0 group-hover:opacity-100 invisible group-hover:visible transition">
                    {item.children.map((c) => (
                      <Link key={c.label} href={c.href!} className="block px-4 py-2 text-gray-700 hover:bg-blue-50">
                        {c.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link key={item.label} href={item.href!} className="px-3 py-2 rounded-md font-medium text-gray-700 hover:text-blue-600">
                  {item.label}
                </Link>
              )
            )}
          </nav>

          <div className="md:hidden">
            <IconButton onClick={() => setOpen(!open)}>
              {open ? <HiX size={22} /> : <HiMenu size={22} />}
            </IconButton>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t bg-white">
          <div className="px-4 py-4 space-y-2">
            {NAV.map((item) =>
              item.children ? (
                <div key={item.label}>
                  <div className="px-2 py-2 font-semibold text-gray-700">{item.label}</div>
                  <div className="pl-4">
                    {item.children.map((c) => (
                      <Link key={c.label} href={c.href!} className="block px-2 py-2 text-gray-700 hover:bg-gray-100">
                        {c.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link key={item.label} href={item.href!} className="block px-2 py-2 text-gray-700 hover:bg-gray-100">
                  {item.label}
                </Link>
              )
            )}
          </div>
        </div>
      )}
    </header>
  );
}
