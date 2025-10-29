import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b border-gray-200 bg-white sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo / Title */}
        <Link href="/" className="text-xl font-semibold tracking-tight text-gray-800">
          Joey Seto
        </Link>

        {/* Navigation (you can add more links later) */}
        <nav className="space-x-6 hidden md:block">
          <Link href="/trips" className="text-gray-600 hover:text-gray-900 transition">
            Trips
          </Link>
          <Link href="/about" className="text-gray-600 hover:text-gray-900 transition">
            About
          </Link>
          <Link href="/contact" className="text-gray-600 hover:text-gray-900 transition">
            Contact
          </Link>
        </nav>

        {/* Mobile menu (optional – can add a hamburger later) */}
      </div>
    </header>
  );
}
