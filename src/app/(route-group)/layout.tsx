import type { Metadata } from "next";
import Navbar from "./_navbar/Navbar";
import "./style.css"

export const metadata: Metadata = {
  title: {
    default: "Auth",
    template: "%s | Auth",
  },
};

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="bg-slate-200 w-full h-full p-5">
      <Navbar />
      {children}
    </div>
  );
}
