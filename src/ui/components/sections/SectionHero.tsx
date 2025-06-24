export function SectionHero() {
  return (
    <section className="relative flex flex-col w-full lg:flex-row lg:justify-between items-center">

      <div className="relative z-10 flex flex-col w-full lg:w-1/2 lg:items-start items-center lg:justify-center justify-start lg:px-0 px-4">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-purple-400"></div>
          <h2 className="text-zinc-500 font-semibold lg:text-xl text-lg tracking-wide">¡Hola!</h2>
        </div>

        <h1 className="text-center lg:text-left font-bold !text-5xl !lg:text-6xl bg-gradient-to-r from-zinc-800 via-zinc-700 to-zinc-600 bg-clip-text text-transparent leading-normal">Soy Diego Martínez</h1>

        <div className="space-y-3 mb-12 text-center lg:text-left">
          <p className="text-zinc-600 lg:text-xl text-lg font-medium">
            Desarrollador front-end <span className="text-2xl">💻</span>
          </p>
          <p className="text-zinc-600 lg:text-xl text-lg font-medium">
            Diseñador de interfaces y experiencia de usuario <span className="text-2xl">🎨</span>
          </p>
        </div>

        <div className="hidden lg:flex flex-col gap-4 w-full max-w-md">
          <a href="https://github.com/diegogama8934" target="_blank" className="group relative w-full bg-gradient-to-r from-zinc-800 to-zinc-700 hover:from-zinc-700 hover:to-zinc-600 text-white rounded-2xl p-4 font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-zinc-900/20 text-center">
            <span className="relative z-10">Perfil de Github</span>
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/10 group-hover:to-purple-500/10 transition-all duration-300"></div>
          </a>

          <a href="https://www.linkedin.com/in/diego-martinez-gama-8934/" target="_blank" className="group relative w-full bg-gradient-to-r from-blue-700 to-blue-600 hover:from-blue-600 hover:to-blue-500 text-white rounded-2xl p-4 font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-900/20 text-center">
            <span className="relative z-10">Perfil de LinkedIn</span>
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/10 group-hover:to-purple-500/10 transition-all duration-300"></div>
          </a>
        </div>
      </div>

      <div className="relative z-10 lg:w-1/2 w-full flex justify-center items-center">
        <div className="relative group">
          <div className="absolute -inset-4 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <img
            src="/yo.jpeg"
            alt="Mi fotografía"
            className="relative lg:w-[400px] lg:h-[450px] w-60 h-64 object-cover rounded-2xl shadow-2xl group-hover:scale-105 transition-transform duration-500"
          />
        </div>
      </div>

      <div className="relative z-10 flex flex-col gap-4 w-full lg:hidden mt-12">
        <a href="https://github.com/diegogama8934" target="_blank" className="group relative w-full bg-gradient-to-r from-zinc-800 to-zinc-700 hover:from-zinc-700 hover:to-zinc-600 text-white rounded-2xl p-4 font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl text-center">
          <span className="relative z-10">Perfil de Github</span>
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/10 group-hover:to-purple-500/10 transition-all duration-300"></div>
        </a>

        <a href="https://www.linkedin.com/in/diego-martinez-gama-8934/" target="_blank" className="group relative w-full bg-gradient-to-r from-blue-700 to-blue-600 hover:from-blue-600 hover:to-blue-500 text-white rounded-2xl p-4 font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl text-center">
          <span className="relative z-10">LinkedIn</span>
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/10 group-hover:to-purple-500/10 transition-all duration-300"></div>
        </a>
      </div>
    </section>
  );
} 