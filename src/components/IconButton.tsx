export default function IconButton({ children, onClick }: { children: React.ReactNode; onClick?: () => void }) {
  return (
    <button onClick={onClick} className="p-2 rounded-md hover:bg-gray-100 transition">
      {children}
    </button>
  );
}
