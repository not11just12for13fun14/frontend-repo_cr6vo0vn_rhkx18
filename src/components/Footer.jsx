export default function Footer() {
  return (
    <footer className="py-10 bg-gradient-to-tr from-blue-900 via-blue-800 to-blue-900 text-white">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="w-2 h-6 bg-white rounded-sm" />
          <span className="w-2 h-6 bg-red-500 rounded-sm" />
          <span className="w-2 h-6 bg-blue-500 rounded-sm" />
          <span className="font-semibold tracking-tight ml-2">French with Riddhi</span>
        </div>
        <div className="text-blue-100/80 text-sm">© {new Date().getFullYear()} All rights reserved.</div>
      </div>
    </footer>
  );
}
