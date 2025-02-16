export default function Theme({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen text-white bg-gradient-to-r from-black to-[#111827]">
      {children}
    </div>
  );
}
