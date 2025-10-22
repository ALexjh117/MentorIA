import { Sparkles, Play } from "lucide-react";
import { useI18n } from "../i18n/I18nProvider";

export default function Hero() {
  const { t } = useI18n()
  return (
    <section className="relative">
      <div className="absolute inset-0 bg-[linear-gradient(180deg,#f6faff,transparent_60%)]" />
      <div className="relative w-full px-6 md:px-10 py-20 min-h-screen grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 text-blue-700 px-3 py-1 text-sm font-medium shadow-sm">
            <Sparkles className="h-4 w-4" />
            <span>Potenciado por IA avanzada</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900">{t('hero_title')}</h1>
          <p className="text-slate-600 max-w-xl">{t('hero_sub')}</p>
          <div className="flex items-center gap-3">
            <a href="#comenzar" className="inline-flex items-center rounded-lg bg-gray-200 px-5 py-3 text-white font-medium shadow-md hover:bg-blue-700 transition-colors">
              {t('hero_primary')}
            </a>
            <a href="#demo" className="inline-flex items-center gap-2 rounded-lg border border-slate-200 px-5 py-3 text-slate-700 font-medium hover:bg-slate-50 transition-colors">
              <Play className="h-4 w-4" /> {t('hero_secondary')}
            </a>
          </div>
        </div>
        <div className="">
          <div className="aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-md ring-1 ring-slate-200">
            <img
              className="h-full w-full object-cover"
              src="https://www.fundacionbankinter.org/wp-content/uploads/2025/04/ginevra-castellano-FTF-Embodied-AI.jpg"
              alt="Pantalla y teclado iluminados representando estudio nocturno"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
