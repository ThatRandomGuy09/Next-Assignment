"use client";

import Link from "next/link";
import Image from "next/image";
import { FC, useState } from "react";
import { useRouter } from "next/navigation";

interface MenuItem {
  title: string;
  icon: string;
}

const Sidebar: FC = () => {
  const router = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menuItems: MenuItem[] = [
    { title: "My Progress", icon: "/Vector.png" },
    { title: "Class Schedule", icon: "/Class.png" },
    { title: "My Course", icon: "/Course.png" },
    { title: "My Test Series", icon: "/Test.png" },
    { title: "Short Notes", icon: "/Short.png" },
    { title: "DSLR", icon: "/DSLR.png" },
  ];

  const handleCourseClick = () => {
    router.push("/my-course");
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <button
        className="lg:hidden fixed top-4 left-4 z-50 p-2 rounded-lg bg-purple-900 text-white"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          {isMobileMenuOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      <div
        className={`fixed lg:relative top-0 left-0 h-screen bg-purple-900 text-white transition-all duration-300 ease-in-out z-40
          ${isMobileMenuOpen ? "w-64" : "w-0 lg:w-64"} overflow-hidden`}
      >
        <div className="h-full w-64 p-4 flex flex-col">
          <div className="mb-8">
            <Image
              src="/nestLogo.png"
              alt="Nest Logo"
              width={100}
              height={30}
            />
          </div>

          <nav className="flex-1">
            <ul className="space-y-2">
              {menuItems.map((item) => (
                <li key={item.title}>
                  {item.title === "My Course" ? (
                    <button
                      onClick={handleCourseClick}
                      className="w-full flex items-center gap-3 px-4 py-2 rounded-lg transition-colors hover:bg-white/10"
                    >
                      <Image
                        src={item.icon}
                        alt={item.title}
                        width={20}
                        height={20}
                        className="w-5 h-5"
                      />
                      <span>{item.title}</span>
                    </button>
                  ) : (
                    <Link
                      href="/"
                      className={`flex items-center gap-3 px-4 py-2 rounded-lg transition-colors
                        ${
                          item.title === "My Test Series"
                            ? "bg-[#FFFFFF1A]"
                            : "hover:bg-white/10"
                        }`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <Image
                        src={item.icon}
                        alt={item.title}
                        width={20}
                        height={20}
                        className="w-5 h-5"
                      />
                      <span>{item.title}</span>
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          <div className="border-t border-purple-800 pt-4 mt-4">
            <ul className="space-y-2">
              <li>
                <Link
                  href="/support"
                  className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-purple-800 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Image
                    src="/Support.png"
                    alt="Support"
                    width={20}
                    height={20}
                    className="w-5 h-5"
                  />
                  <span>Support</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/logout"
                  className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-purple-800 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Image
                    src="/Log.png"
                    alt="Logout"
                    width={20}
                    height={20}
                    className="w-5 h-5"
                  />
                  <span>Log Out</span>
                </Link>
              </li>
            </ul>
          </div>

          <div className="mt-4">
            <Link
              href="/profile"
              className="flex items-center justify-between px-4 py-3 rounded-lg bg-[#FFFFFF1A] transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <div className="flex items-center gap-3">
                <Image
                  src="/Profile.png"
                  alt="Profile"
                  width={32}
                  height={32}
                  className="w-8 h-8 rounded-full"
                />
                <span>My Profile</span>
              </div>
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </>
  );
};

export default Sidebar;
