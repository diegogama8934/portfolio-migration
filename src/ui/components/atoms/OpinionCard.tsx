import type { OpinionCardProps } from "../../../interfaces";

export function OpinionCard({ name, image, email, description, place }: OpinionCardProps) {
  return (
    <article className="card-group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white/80 to-white/60 backdrop-blur-sm border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] hover:border-white/40">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-transparent to-purple-50/30 opacity-0 card-group-hover:opacity-100 transition-opacity duration-500"></div>
      
      {/* Content */}
      <div className="relative z-10 p-8">
        <header className="mb-6">
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-4">
              <div className="relative group">
                <div className="absolute -inset-2 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <img
                  src={image}
                  className="relative w-16 h-16 object-cover rounded-xl group-hover:scale-110 transition-transform duration-300"
                  alt={`${name} profile`}
                />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-2xl font-bold bg-gradient-to-r from-zinc-800 to-zinc-600 bg-clip-text text-transparent card-group-hover:from-blue-800 card-group-hover:to-purple-700 transition-all duration-300">
                  {name}
                </h3>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-semibold text-zinc-500 uppercase tracking-wide">Testimonio</span>
                  <div className="w-1 h-1 rounded-full bg-gradient-to-r from-blue-400 to-purple-400"></div>
                </div>
              </div>
            </div>
            <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 opacity-60 card-group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
          
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r from-zinc-100 to-zinc-50 border border-zinc-200/50">
            <span className="text-sm font-medium text-zinc-600">{place}</span>
          </div>
        </header>

        <div className="mb-6">
          <p className="text-zinc-600 leading-relaxed text-base font-medium">
            "{description}"
          </p>
        </div>

        <footer className="flex items-center justify-between pt-6 border-t border-zinc-200/50">
          <div className="flex items-center gap-2">
            <div className="w-1 h-1 rounded-full bg-gradient-to-r from-blue-400 to-purple-400"></div>
            <span className="text-sm font-semibold text-zinc-500 uppercase tracking-wide">Contacto</span>
          </div>
          
          <div className="flex items-center gap-2">
            <span className="text-sm text-zinc-500">📧</span>
            <span className="text-sm font-medium text-zinc-600">{email}</span>
          </div>
        </footer>
      </div>
      
      {/* Decorative corner element */}
      <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-blue-400/10 to-transparent rounded-bl-2xl"></div>
    </article>
  );
}