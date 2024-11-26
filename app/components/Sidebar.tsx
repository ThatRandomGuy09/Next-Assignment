import Link from "next/link";
import Image from "next/image";
import { FC } from "react";

interface MenuItem {
  title: string;
  path: string;
  icon: string; // This will now be the path to the icon image
}

const Sidebar: FC = () => {
  const menuItems: MenuItem[] = [
    { title: "My Progress", path: "/progress", icon: "/Vector.png" },
    { title: "Class Schedule", path: "/schedule", icon: "/Class.png" },
    { title: "My Course", path: "/course", icon: "/Course.png" },
    { title: "My Test Series", path: "/test-series", icon: "/Test.png" },
    { title: "Short Notes", path: "/notes", icon: "/Short.png" },
    { title: "DSLR", path: "/dslr", icon: "/DSLR.png" },
  ];

  return (
    <div className="h-screen w-64 bg-purple-900 text-white p-4 flex flex-col">
      {/* Logo */}
      <div className="mb-8">
        <Image src="/nestLogo.png" alt="Nest Logo" width={100} height={30} />
      </div>

      {/* Menu Items */}
      <nav className="flex-1">
        <ul className="space-y-2">
          {menuItems.map((item) => (
            <li key={item.title}>
              <Link
                href={item.path}
                className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-purple-800 transition-colors"
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
            </li>
          ))}
        </ul>
      </nav>

      {/* Bottom Section */}
      <div className="border-t border-purple-800 pt-4 mt-4">
        <ul className="space-y-2">
          <li>
            <Link
              href="/support"
              className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-purple-800 transition-colors"
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
          className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-purple-800 transition-colors"
        >
          <Image
            src="/Profile.png"
            alt="Profile"
            width={32}
            height={32}
            className="w-8 h-8 rounded-full"
          />
          <span>My Profile</span>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
