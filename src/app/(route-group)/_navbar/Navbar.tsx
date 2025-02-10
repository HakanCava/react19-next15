"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "Register", href: "/register" },
  { name: "Login", href: "/login" },
  { name: "Forgot Password", href: "/forgot-password" },
];

const Navbar = () => {
  const pathname = usePathname();
  return (
    <header className="bg-fuchsia-300 p-3">
      <nav className="flex gap-5">
        {navLinks.map((link) => {
          const isActive =
            pathname === link.href ||
            (pathname.startsWith(link.href) && link.href !== "/");
          return (
            <Link
              className={isActive ? "text-red-500 font-bold" : "text-blue-500"}
              key={link.name}
              href={link.href}
            >
              {link.name}
            </Link>
          );
        })}
      </nav>
    </header>
  );
};

export default Navbar;
