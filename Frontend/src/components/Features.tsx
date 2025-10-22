import { BrainCog, BookOpen, BarChart3 } from "lucide-react";

const items = [
  {
    icon: BrainCog,
    title: "Análisis de Pensamiento Crítico",
    desc: "Evalúa y mejora habilidades mediante retroalimentación personalizada.",
  },
  {
    icon: BookOpen,
    title: "Actividades Adaptativas",
    desc: "Contenido que se ajusta automáticamente al estilo de aprendizaje.",
  },
  {
    icon: BarChart3,
    title: "Métricas en Tiempo Real",
    desc: "Gráficos detallados del progreso cognitivo.",
  },
];

export default function Features() {
  return (
    <section className="w-full px-6 md:px-10 py-20">
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold text-slate-900">¿Por qué elegir Mentor-IA?</h2>
        <p className="mt-2 text-slate-600">Una plataforma completa para docentes, estudiantes y administradores.</p>
      </div>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {items.map(({ icon: Icon, title, desc }) => (
          <div key={title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-md hover:shadow-lg transition-shadow">
            <div className="h-10 w-10 rounded-xl bg-blue-50 text-blue-700 grid place-items-center mb-4">
              <Icon className="h-5 w-5" />
            </div>
            <h3 className="font-semibold text-slate-900">{title}</h3>
            <p className="mt-2 text-sm text-slate-600">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
