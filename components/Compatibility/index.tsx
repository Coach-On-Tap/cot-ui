import { useState } from "react";
import Tooltip from "@/components/Tooltip";
import Image from "@/components/Image";

// Mock data directly in component
const compatibility = [
  { id: 1, title: "Windows", image: "/images/compatibility/windows.svg" },
  { id: 2, title: "macOS", image: "/images/compatibility/macos.svg" },
  { id: 3, title: "Linux", image: "/images/compatibility/linux.svg" },
  { id: 4, title: "iOS", image: "/images/compatibility/ios.svg" },
  { id: 5, title: "Android", image: "/images/compatibility/android.svg" },
];

type CompatibilityProps = {
  classItemName?: string;
};

const Compatibility = ({ classItemName }: CompatibilityProps) => {
  const [activeIds, setActiveIds] = useState<number[]>([]);

  const handleClick = (id: number) => {
    setActiveIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <div>
      <div className="flex items-center mb-4">
        <div className="text-button">Compatibility</div>
        <Tooltip
          className="ml-1.5"
          content="Maximum 100 characters. No HTML or emoji allowed"
        />
      </div>
      <div className="flex flex-wrap -mt-3 -mx-1.5">
        {compatibility.map((item: any) => (
          <div
            className={`flex items-center h-12 mt-3 mx-1.5 gap-2 border border-s-stroke2 rounded-full px-2.5 text-button transition-colors cursor-pointer hover:border-s-highlight ${
              activeIds.includes(item.id) ? "!border-s-focus" : ""
            } ${classItemName || ""}`}
            onClick={() => handleClick(item.id)}
            key={item.id}
          >
            <div className="dark:bg-shade-05 rounded">
              <Image
                className="size-6 opacity-100"
                src={item.image}
                width={24}
                height={24}
                alt={item.title}
              />
            </div>
            <div className="truncate">{item.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Compatibility;
