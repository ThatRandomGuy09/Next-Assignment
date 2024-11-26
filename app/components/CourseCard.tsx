"use client";

import Image from "next/image";
import { FC } from "react";

interface CourseCardProps {
  title: string;
  description: string;
  image: string;
  price: number;
  originalPrice: number;
  discount: number;
}

const CourseCard: FC<CourseCardProps> = ({
  title,
  description,
  image,
  price,
  originalPrice,
  discount,
}) => {
  return (
    <div className="bg-white rounded-xl p-3 lg:p-4 shadow-sm">
      <div className="w-full aspect-video relative rounded-lg overflow-hidden mb-3 lg:mb-4">
        <Image src={image} alt={title} fill className="object-cover" />
      </div>

      <div>
        <h3 className="text-base lg:text-lg font-medium mb-1 lg:mb-2">
          {title}
        </h3>
        <p className="text-gray-600 text-xs lg:text-sm mb-3 lg:mb-4">
          {description}
        </p>

        <div className="mb-3 lg:mb-4">
          <div className="text-purple-600 text-sm lg:text-base font-medium mb-1">
            Special Price
          </div>
          <div className="flex items-center gap-2">
            <span className="text-base lg:text-lg font-medium">
              ₹{price.toLocaleString()}
            </span>
            <span className="text-gray-400 line-through text-xs lg:text-sm">
              ₹{originalPrice.toLocaleString()}
            </span>
            <span className="text-green-500 text-xs lg:text-sm">
              {discount}% off
            </span>
          </div>
        </div>

        <div className="flex gap-2 lg:gap-3">
          <button className="flex-1 px-3 py-1.5 lg:px-4 lg:py-2 border border-purple-600 text-purple-600 rounded-lg text-sm hover:bg-purple-50 transition-colors">
            Buy now
          </button>
          <button className="flex-1 px-3 py-1.5 lg:px-4 lg:py-2 bg-purple-600 text-white rounded-lg text-sm hover:bg-purple-700 transition-colors">
            Explore
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
