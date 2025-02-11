"use client";
import React from "react";
import { useRouter } from "next/navigation";

const NavProgrammatically = () => {
  const router = useRouter();
  const handleClick = () => {
    router.push("/");
  };
  return (
    <div>
      <h2>NavProgrammatically</h2>
      <button className="border border-red-500 p-3 bg-red-500 rounded-md mt-3" onClick={handleClick}>go to home after some cases</button>
    </div>
  );
};

export default NavProgrammatically;
