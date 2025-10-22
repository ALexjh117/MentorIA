import { Brain } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/70 border-b border-slate-100 shadow-sm">
      <nav className="w-full px-6 md:px-10 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-full bg-blue-100 text-blue-600 grid place-items-center">
            <Brain className="h-5 w-5" />
          </div>
          <span className="font-semibold text-slate-800">Mentor-IA Platform</span>
        </div>
        <div className="flex items-center gap-3">
          <button className="text-slate-700 hover:text-slate-900 text-sm">Iniciar sesión</button>
          <a
            href="#"
            className="inline-flex items-center rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-md hover:bg-blue-700 transition-colors"
          >
            Comenzar gratis
          </a>
        </div>
      </nav>
    </header>
  );
}
