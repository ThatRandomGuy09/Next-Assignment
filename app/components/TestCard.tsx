import Image from "next/image";
import { FC } from "react";

interface TestCardProps {
  title: string;
  description: string;
  progress: number;
  image: string;
}

const TestCard: FC<TestCardProps> = ({
  title,
  description,
  progress,
  image,
}) => {
  return (
    <div className="bg-white rounded-xl p-3 lg:p-4 flex items-center gap-3 lg:gap-4 shadow-sm">
      <div className="w-16 h-16 lg:w-24 lg:h-24 relative rounded-lg overflow-hidden flex-shrink-0">
        <Image src={image} alt={title} fill className="object-cover" />
      </div>

      <div className="flex-1 min-w-0">
        <h3 className="text-base lg:text-lg font-medium mb-1 truncate">
          {title}
        </h3>
        <p className="text-gray-600 text-xs lg:text-sm mb-2 lg:mb-3 line-clamp-2">
          {description}
        </p>

        <div className="relative w-full h-1.5 lg:h-2 bg-gray-100 rounded-full">
          <div
            className="absolute left-0 top-0 h-full bg-purple-600 rounded-full"
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="text-right text-xs lg:text-sm text-gray-600 mt-1">
          {progress}%
        </div>
      </div>
    </div>
  );
};

export default TestCard;
