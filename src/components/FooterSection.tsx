export default function FooterSection() {
  return (
    <footer className="bg-zinc-800 text-zinc-300 py-8">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <p className="mb-4">© {new Date().getFullYear()} Raphael Bautista</p>
      </div>
    </footer>
  );
}
