import Link from "next/link";
import React from "react";

const ParamsAndSearchParams = () => {
  return (
    <div>
      <h2>ParamsAndSearchParams</h2>
      <nav className="flex flex-col">
        <Link href="/counter">Counter</Link>
        <Link href="/products/detail-12?lang=en">English</Link>
        <Link href="/products/detail-12?lang=tr">Turkish</Link>
      </nav>
    </div>
  );
};

export default ParamsAndSearchParams;
