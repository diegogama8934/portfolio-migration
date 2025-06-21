export function SectionContact() {
  return (
    <section className="relative flex flex-col gap-16 py-20">
      <div className="relative z-10 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <h2 className="section-title">Contacto</h2>
          <span className="text-3xl animate-bounce inline-block">🕹️</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <a 
          href="mailto:diegogama8934@gmail.com"
          className="flex items-center gap-4 p-6 rounded-2xl bg-gradient-to-br from-white/80 to-white/40 border border-white/20 shadow-lg hover:scale-105 transition-transform duration-300"
        >
          <div className="text-3xl">📧</div>
          <div>
            <h3 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Email</h3>
            <p className="text-zinc-600">your.email@example.com</p>
          </div>
        </a>

        <a 
          href="www.linkedin.com/in/diego-martínez-garcía-3301902a8"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 p-6 rounded-2xl bg-gradient-to-br from-white/80 to-white/40 border border-white/20 shadow-lg hover:scale-105 transition-transform duration-300"
        >
          <div className="text-3xl">💼</div>
          <div>
            <h3 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">LinkedIn</h3>
            <p className="text-zinc-600">Connect with me</p>
          </div>
        </a>

        <a 
          href="https://github.com/diegogama8934"
          target="_blank"
          rel="noopener noreferrer" 
          className="flex items-center gap-4 p-6 rounded-2xl bg-gradient-to-br from-white/80 to-white/40 border border-white/20 shadow-lg hover:scale-105 transition-transform duration-300"
        >
          <div className="text-3xl">👨‍💻</div>
          <div>
            <h3 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">GitHub</h3>
            <p className="text-zinc-600">Check my repositories</p>
          </div>
        </a>
      </div>


      <form className="max-w-2xl mx-auto w-full">
        <div className="flex flex-col gap-6 p-8 rounded-2xl bg-gradient-to-br from-white/80 to-white/40 border border-white/20 shadow-lg">
          <div className="flex items-center gap-3 mb-2">
            <h3 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Déjame tu opinión</h3>
            <span className="text-2xl">✍️</span>
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="text-sm font-semibold text-zinc-600">Nombre</label>
            <input
              type="text"
              id="name"
              className="p-3 rounded-xl bg-white/50 border border-white/30 focus:outline-none focus:ring-2 focus:ring-blue-400/30 transition-all duration-300"
              placeholder="Tu nombre"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-sm font-semibold text-zinc-600">Email</label>
            <input
              type="email"
              id="email"
              className="p-3 rounded-xl bg-white/50 border border-white/30 focus:outline-none focus:ring-2 focus:ring-blue-400/30 transition-all duration-300"
              placeholder="tu@email.com"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="connection" className="text-sm font-semibold text-zinc-600">¿De dónde nos conocemos?</label>
            <input
              type="text"
              id="connection"
              className="p-3 rounded-xl bg-white/50 border border-white/30 focus:outline-none focus:ring-2 focus:ring-blue-400/30 transition-all duration-300"
              placeholder="Empresa, proyecto o lugar donde nos conocimos"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="message" className="text-sm font-semibold text-zinc-600">Mensaje</label>
            <textarea
              id="message"
              rows={4}
              className="p-3 rounded-xl bg-white/50 border border-white/30 focus:outline-none focus:ring-2 focus:ring-blue-400/30 transition-all duration-300 resize-none"
              placeholder="Escribe tu opinión aquí..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full py-3 px-6 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold hover:opacity-90 transition-opacity duration-300"
          >
            Enviar mensaje
          </button>
        </div>
      </form>

      <div className="text-center text-zinc-500 text-sm">
        © 2025 Diego Martínez García. All rights reserved.
      </div>

    </section>
  );
}