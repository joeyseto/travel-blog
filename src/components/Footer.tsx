export default function Footer() {
  return (
    <footer className="bg-white border-t mt-16">
      <div className="max-w-7xl mx-auto px-6 py-8 text-center text-gray-600">
        <p className="mb-2">© {new Date().getFullYear()} Joey Seto</p>
        <p className="text-sm">A travel blog — stories, guides, and photography.</p>
      </div>
    </footer>
  );
}
