"use client";

import Image from "next/image";
import Link from "next/link";
import { FC, useState } from "react";

const CourseNavbar: FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { title: "Home", path: "/home", icon: "/Home.png" },
    { title: "Program", path: "/program", icon: "/Program.png" },
    { title: "Test Series", path: "/test", icon: "/TestSeries.png" },
    { title: "My Cart", path: "/cart", icon: "/Cart.png" },
    { title: "More", path: "#", hasDropdown: true },
  ];

  return (
    <nav className="bg-white border-b">
      <div className="max-w-[1440px] mx-auto px-4 lg:px-6">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-8">
            <Image
              src="/nestLogo-white.png"
              alt="Nest Logo"
              width={100}
              height={30}
            />

            <div className="hidden lg:flex items-center gap-6">
              {navItems.map((item) => (
                <Link
                  key={item.title}
                  href={item.path}
                  className="flex items-center gap-2 text-gray-600 hover:text-purple-600 transition-colors"
                >
                  {item.icon && (
                    <Image
                      src={item.icon}
                      alt={item.title}
                      width={20}
                      height={20}
                      className="w-5 h-5"
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

          <div className="flex items-center gap-4">
            <button
              className="lg:hidden p-2 text-gray-600"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={
                    isMobileMenuOpen
                      ? "M6 18L18 6M6 6l12 12"
                      : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </button>

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
        </div>

        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.title}
                href={item.path}
                className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:bg-gray-50"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.icon && (
                  <Image
                    src={item.icon}
                    alt={item.title}
                    width={20}
                    height={20}
                    className="w-5 h-5"
                  />
                )}
                <span>{item.title}</span>
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default CourseNavbar;
