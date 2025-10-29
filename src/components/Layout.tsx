import React from "react";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-900">
      {/* Site header */}
      <Header />

      {/* Page content */}
      <main className="flex-grow w-full">
        {children}
      </main>

      {/* Site footer */}
      <Footer />
    </div>
  );
}
