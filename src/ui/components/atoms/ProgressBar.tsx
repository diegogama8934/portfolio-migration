export function ProgressBar({ level }: { level: number }) {

  const levelVariants: Record<number, { width: string; gradient: string }> = {
    1: { width: "w-[10%]", gradient: "bg-gradient-to-r from-red-400 to-red-500" },
    2: { width: "w-[20%]", gradient: "bg-gradient-to-r from-red-400 to-red-500" },
    3: { width: "w-[30%]", gradient: "bg-gradient-to-r from-red-400 to-red-500" },
    4: { width: "w-[40%]", gradient: "bg-gradient-to-r from-amber-400 to-amber-500" },
    5: { width: "w-[50%]", gradient: "bg-gradient-to-r from-amber-400 to-amber-500" },
    6: { width: "w-[60%]", gradient: "bg-gradient-to-r from-amber-400 to-amber-500" },
    7: { width: "w-[70%]", gradient: "bg-gradient-to-r from-amber-400 to-amber-500" },
    8: { width: "w-[80%]", gradient: "bg-gradient-to-r from-green-400 to-green-500" },
    9: { width: "w-[90%]", gradient: "bg-gradient-to-r from-green-400 to-green-500" },
    10: { width: "w-full", gradient: "bg-gradient-to-r from-green-400 to-green-500" }
  }

  const { width, gradient } = levelVariants[level];

  return (
    <div className="relative w-full h-4 bg-gradient-to-r from-zinc-100 to-zinc-50 rounded-xl border border-zinc-200/50 overflow-hidden">
      <div className={`absolute inset-0 ${gradient} rounded-xl transition-all duration-700 ease-out ${width}`}>
        <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-transparent to-white/10"></div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-white/10 via-transparent to-white/5"></div>
    </div>
  );
}