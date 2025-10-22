import { GraduationCap, UserRoundCheck, Building2 } from "lucide-react";

export default function Roles() {
  return (
    <section className="bg-[#f6faff]">
      <div className="w-full px-6 md:px-10 py-20">
        <h2 className="text-3xl font-bold text-slate-900 text-center">Para cada rol educativo</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <RoleCard
            icon={GraduationCap}
            title="Estudiantes"
            color="from-blue-50 to-blue-100"
            items={[
              "Guías interactivas",
              "Asistente IA para reflexión",
              "Seguimiento personal",
              "Recomendaciones personalizadas",
            ]}
          />
          <RoleCard
            icon={UserRoundCheck}
            title="Docentes"
            color="from-green-50 to-emerald-100"
            items={[
              "Creación de actividades adaptativas",
              "Métricas grupales",
              "Gestión de estudiantes",
              "Exportación de reportes",
            ]}
          />
          <RoleCard
            icon={Building2}
            title="Administradores"
            color="from-violet-50 to-purple-100"
            items={[
              "Control total del sistema",
              "Gestión de roles y permisos",
              "Estadísticas globales",
              "Configuración avanzada",
            ]}
          />
        </div>
      </div>
    </section>
  );
}

function RoleCard({
  icon: Icon,
  title,
  color,
  items,
}: {
  icon: React.ElementType;
  title: string;
  color: string;
  items: string[];
}) {
  return (
    <div className={`rounded-2xl bg-gradient-to-br ${color} p-6 shadow-md ring-1 ring-slate-200/60`}>
      <div className="flex items-center gap-3">
        <div className="h-10 w-10 rounded-xl bg-white/80 text-slate-800 grid place-items-center">
          <Icon className="h-5 w-5" />
        </div>
        <h3 className="font-semibold text-slate-900">{title}</h3>
      </div>
      <ul className="mt-4 space-y-2 text-sm text-slate-700">
        {items.map((t) => (
          <li key={t}>✓ {t}</li>
        ))}
      </ul>
    </div>
  );
}
