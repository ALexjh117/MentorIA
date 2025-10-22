import { Brain } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0d1b2a] text-slate-200">
      <div className="w-full px-6 md:px-10 py-10 flex flex-col items-center gap-3">
        <div className="flex items-center gap-2 text-slate-100">
          <Brain className="h-5 w-5 text-blue-300" />
          <span className="font-semibold">Mentor-IA Platform</span>
        </div>
        <p className="text-sm text-slate-400">© 2025 Mentor-IA Platform.</p>
        <p className="text-xs text-slate-500">Transformando la educación con inteligencia artificial.</p>
      </div>
    </footer>
  );
}
