import { technologiesPool } from "../../../constants";

export function SectionTechnologies() {

  return (
    <div
      id="technologies"
      className="relative z-10 flex flex-col gap-20"
    >
      <section className="relative flex flex-col gap-16 py-20 items-center">

        <h2 className="text-xl md:text-5xl font-semibold text-center text-gray-500 leading-relaxed mt-20">
          What powers <span className="gradient-text font-extrabold">my solutions</span>.
        </h2>

        <span className="material-symbols-outlined !text-[100px] !text-gray-300">construction</span>

        <div className="grid grid-cols-3 gap-4">
          {technologiesPool.map(({ name, image, knowledge }) => (
            <div key={name} className={`flex w-[320px] h-28 rounded-xl bg-white p-4 border border-gray-200 gap-4`}>
              <img src={image} alt={name} className={`object-contain aspect-square rounded-md`} />
              <div className="flex flex-col gap-2">
                <span className="w-full text-sm font-bold text-gray-500">{name}</span>
                <p className="flex flex-col gap-2 line-clamp-2">
                  {knowledge.map((item) => (
                    <span key={item} className="text-sm text-gray-500">{item}</span>
                  ))}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section >
    </div >
  );
}