export function Hero() {
  return (
    <div className="flex flex-col w-full lg:flex-row lg:justify-between items-center px-4 lg:px-0">

      <div className="flex flex-col w-full lg:w-1/2 lg:items-center items-center lg:justify-center justify-start lg:px-0 px-4">
        <h2 className="text-zinc-500 font-bold lg:text-2xl text-lg">Hola!</h2>
        <h1 className="text-zinc-800 font-bold lg:text-4xl text-2xl">Soy Diego Martínez</h1>
        <p className="text-zinc-500 lg:text-xl text-base text-center lg:text-left mt-4">Desarrollador front-end 💻</p>
        <p className="text-zinc-500 lg:text-xl text-base text-center lg:text-left mt-4">Diseñador de interfaces y experiencia de usuario 🎨</p>
        <button className="hidden w-96 lg:block bg-zinc-900 text-zinc-300 rounded-md p-4 mt-12 hover:bg-zinc-800 transition-colors">Perfil de Github</button>
        <button className="hidden w-96 lg:block bg-blue-900 text-zinc-300 rounded-md p-4 mt-4 hover:bg-blue-800 transition-colors">Perfil de Linked In</button>
      </div>

      <div className="lg:w-1/2 w-full flex justify-center items-center">
        <img
          src="/yo.jpeg"
          alt="Mi fotografía"
          className="lg:w-[400px] lg:h-[450px] w-60 h-64 mt-4 lg:mt-0 object-cover rounded-xl"
        />
      </div>

      <div className="flex flex-col gap-2 w-full lg:hidden mt-8">
        <button className="w-full bg-zinc-900 text-zinc-300 rounded-md lg:p-4 p-3 lg:mt-12 hover:bg-zinc-800 transition-colors">Perfil de Github</button>
        <button className="w-full bg-blue-900 text-zinc-300 rounded-md lg:p-4 p-3 lg:mt-4 text-sm hover:bg-blue-800 transition-colors">Linked In</button>
      </div>

    </div>
  );
} 