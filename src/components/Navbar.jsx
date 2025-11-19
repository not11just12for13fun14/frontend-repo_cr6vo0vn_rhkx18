import { Menu } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const navItems = [
    { label: "About", href: "#about" },
    { label: "Reviews", href: "#reviews" },
    { label: "Growth", href: "#growth" },
    { label: "Curriculum", href: "#curriculum" },
    { label: "Details", href: "#details" },
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/70 border-b border-blue-100">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <a href="#home" className="inline-flex items-center gap-2">
          <span className="w-2 h-6 bg-blue-600 rounded-sm" />
          <span className="w-2 h-6 bg-white rounded-sm border border-blue-100" />
          <span className="w-2 h-6 bg-red-600 rounded-sm" />
          <span className="font-semibold text-blue-900 tracking-tight ml-2">
            French with Riddhi
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-6 text-blue-900">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="hover:text-red-600 transition-colors">
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            className="ml-2 inline-flex items-center px-4 py-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors"
          >
            Free Trial
          </a>
        </nav>

        <button
          className="md:hidden p-2 rounded-md border border-blue-200 text-blue-900"
          onClick={() => setOpen((v) => !v)}
          aria-label="Open menu"
        >
          <Menu size={20} />
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-blue-100 bg-white/80 backdrop-blur">
          <div className="max-w-6xl mx-auto px-4 py-3 flex flex-col gap-3">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="py-2 text-blue-900 hover:text-red-600"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-blue-600 text-white"
            >
              Free Trial
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
