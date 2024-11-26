"use client";

import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

const CourseNavbar: FC = () => {
  const navItems = [
    {
      title: "Home",
      path: "/home",
      icon: "/Home.png",
      isActive: false,
    },
    {
      title: "Program",
      path: "/program",
      icon: "/Program.png",
      isActive: true,
    },
    {
      title: "Test Series",
      path: "/test-series",
      icon: "/Test.png",
      isActive: false,
    },
    {
      title: "My Cart",
      path: "/cart",
      icon: "/Cart.png",
      isActive: false,
    },
    {
      title: "More",
      path: "#",
      icon: "",
      isActive: false,
      hasDropdown: true,
    },
  ];

  return (
    <nav className="bg-white px-6 py-4 border-b">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-12">
          <Image
            src="/nestLogo-white.png"
            alt="Nest Logo"
            width={100}
            height={30}
          />

          <div className="flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.title}
                href={item.path}
                className={`flex items-center gap-2 hover:text-purple-600 transition-colors
                  ${item.isActive ? "text-purple-600" : "text-gray-600"}`}
              >
                {item.icon && (
                  <Image
                    src={item.icon}
                    alt={item.title}
                    width={20}
                    height={20}
                    className={`w-5 h-5 ${
                      item.isActive ? "text-purple-600" : "text-gray-600"
                    }`}
                  />
                )}
                <span>{item.title}</span>
                {item.hasDropdown && (
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                )}
              </Link>
            ))}
          </div>
        </div>

        <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
          <Image
            src="/Profile.png"
            alt="Profile"
            width={24}
            height={24}
            className="rounded-full"
          />
        </div>
      </div>
    </nav>
  );
};

export default CourseNavbar;
