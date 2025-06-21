export function SectionAboutMe() {
  return (
    <div className="relative z-10 flex flex-col gap-20 px-4 lg:px-80 py-8">
      <section className="relative flex flex-col gap-16 py-20">
        <div className="relative z-10 flex items-center gap-4">
          <h2 className="section-title">¿Qué es lo que hago?</h2>
          <span className="text-3xl animate-bounce inline-block">💼</span>
        </div>

        <div className="relative z-10">
          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mb-8"></div>

          <div className="prose prose-lg">
            <p className="text-zinc-600 leading-relaxed mb-6">
              Mi camino profesional comenzó en el mundo del <span className="font-semibold text-zinc-700">diseño de interfaces</span>, enfocado en crear experiencias intuitivas y accesibles para los usuarios. Siempre me ha motivado pensar en cómo los productos digitales pueden ser no solo visualmente atractivos, sino también funcionales y fáciles de usar.
            </p>

            <p className="text-zinc-600 leading-relaxed mb-6">
              Con el tiempo, ese interés me llevó a querer implementar mis propios diseños en código, y fue así como descubrí <span className="font-semibold text-zinc-700">React</span>, una herramienta que se convirtió en mi principal aliada para transformar ideas en productos reales.
            </p>

            <p className="text-zinc-600 leading-relaxed mb-6">
              Actualmente, combino mis habilidades como diseñador de interfaces con mi rol como <span className="font-semibold text-zinc-700">desarrollador front-end</span>. Tengo experiencia creando prototipos de baja y media-alta fidelidad, para luego implementarlos directamente en React, cuidando tanto la estética como la calidad del código.
            </p>

            <p className="text-zinc-600 leading-relaxed mb-6">
              Recientemente, he trabajado con <span className="font-semibold text-zinc-700">arquitecturas de Microfrontends</span> utilizando Single SPA, lo que me ha permitido contribuir a la modularización de aplicaciones grandes, facilitando su mantenimiento y escalabilidad. En este contexto, también he desarrollado módulos utilitarios que centralizan dependencias compartidas, optimizando el rendimiento y evitando redundancias entre microfrontends.
            </p>

            <p className="text-zinc-600 leading-relaxed mb-6">
              Me estoy preparando para obtener la <span className="font-semibold text-zinc-700">certificación AWS Developer Associate</span>, con el objetivo de fortalecer mis conocimientos en la nube y expandir mi perfil como desarrollador.
            </p>

            <p className="text-zinc-600 leading-relaxed mb-6">
              Tengo aproximadamente <span className="font-semibold text-zinc-700">tres años de experiencia</span>, los cuales inicié en un centro de desarrollo ofreciendo mi trabajo de forma gratuita, con la intención de aprender, mejorar y aportar. Esa etapa me permitió crecer tanto en habilidades técnicas como en competencias blandas, como la colaboración, la organización y la comunicación efectiva.
            </p>

            <p className="text-zinc-600 leading-relaxed mb-6">
              Me considero una persona <span className="font-semibold text-zinc-700">resiliente y adaptable</span>. Siempre estoy dispuesto a escuchar críticas constructivas, ya sea sobre un diseño o una decisión técnica, porque creo firmemente que de cada conversación se puede aprender algo nuevo.
            </p>

            <p className="text-zinc-600 leading-relaxed mb-6">
              Además, me gusta mantenerme activo tanto física como mentalmente: en mis tiempos libres disfruto ir al gimnasio, jugar y ver partidos de basquetbol, jugar videojuegos, y seguir aprendiendo a través de cursos relacionados con mi área.
            </p>

            <p className="text-zinc-600 leading-relaxed">
              Mi nivel de inglés es <span className="font-semibold text-zinc-700">B2</span>, y aunque actualmente no lo hablo con la fluidez de antes por falta de práctica frecuente, sé que con tiempo y constancia recuperaré esa soltura. Estoy comprometido a mejorar también en ese aspecto para poder comunicarme sin barreras en entornos internacionales.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}