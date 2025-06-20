interface TooltipProps {
  text: string;
  children: React.ReactNode;
}

export function Tooltip({ text, children }: TooltipProps) {
  return (
    <div className="group relative inline-block">
      {children}
      <div className="absolute invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-300 
        bg-zinc-800 text-zinc-100 text-sm rounded-md py-1 px-2 -mt-2 
        left-1/2 transform -translate-x-1/2 translate-y-1 group-hover:translate-y-0 z-10 whitespace-nowrap">
        {text}
        <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 border-4 border-transparent border-b-zinc-800" />
      </div>
    </div>
  );
}