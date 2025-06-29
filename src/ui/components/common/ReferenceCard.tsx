import { useState } from "react";

interface ReferenceCardProps {
  img: string | null;
  name: string;
  role: string;
  place: string;
  description: string;
}


export function ReferenceCard({ description, img, name, place, role }: ReferenceCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  function toggleExpanded() {
    setIsExpanded((prev) => !prev);
  }

  return (
    <div
      className="flex flex-col cursor-pointer gap-4 p-8 border border-gray-200 rounded-md dark:bg-zinc-800 dark:border-zinc-700 dark:text-zinc-300"
      onClick={toggleExpanded}
    >
      <div className="flex items-center gap-4">
        {img ? (
          <img
            src={img}
            alt="profile"
            className="w-14 h-14 object-cover rounded-full"
          />
        ) : (
          <div className="rounded-full w-14 h-14 bg-zinc-200"></div>
        )}
        <div className="flex flex-col gap-2">
          <h3 className="text-lg font-semibold">{name}</h3>
          <p className="text-sm text-gray-500">{role && role} {place && `| ${place}`}</p>
        </div>
      </div>
      <p className={`text-sm text-gray-500 dark:text-zinc-300 leading-loose ${!isExpanded && "line-clamp-3"}`}>
        {description}
      </p>
    </div>
  );
}