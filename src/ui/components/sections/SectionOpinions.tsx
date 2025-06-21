import { opinions } from "../../../constants";
import { OpinionCard } from "../atoms/OpinionCard";

export function SectionOpinions() {
  return (
    <div className="relative z-10 flex flex-col gap-20 px-4 lg:px-80 py-8">
      <div className="relative z-10 flex items-center gap-4">
        <h2 className="section-title">Opiniones</h2>
        <span className="text-3xl animate-bounce inline-block">💬</span>
      </div>

      <div className="relative z-10">
        <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mb-8"></div>
      </div>

      <div className="relative z-10 flex flex-col gap-4">
        {opinions.map((opinion) => (
          <OpinionCard
            key={opinion.id}
            {...opinion}
          />
        ))}
      </div>
    </div>
  );
}