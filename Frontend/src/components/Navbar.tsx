import { Brain } from "lucide-react";
import { useI18n } from "../i18n/I18nProvider";

export default function Navbar() {
  const { t, lang, setLang } = useI18n()
  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/70 border-b border-slate-100 shadow-sm">
      <nav className="w-full px-6 md:px-10 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-full bg-blue-100 text-blue-600 grid place-items-center">
            <Brain className="h-5 w-5" />
          </div>
          <span className="font-semibold text-slate-800">{t('brand')}</span>
        </div>
        <div className="flex items-center gap-3">
          <button className="text-slate-700 hover:text-slate-900 text-sm">{t('nav_login')}</button>
          <select
            aria-label="Language"
            className="rounded border border-slate-300 bg-white px-2 py-1 text-sm text-slate-700"
            value={lang}
            onChange={(e) => setLang(e.target.value as any)}
          >
            <option value="es">ES</option>
            <option value="en">EN</option>
          </select>
          <a
            href="#"
            className="inline-flex items-center rounded-lg bg-gray-200 px-4 py-2 text-sm font-medium text-white shadow-md hover:bg-blue-700 transition-colors"
          >
            {t('nav_cta')}
          </a>
        </div>
      </nav>
    </header>
  );
}
