import Link from "next/link";
import React from "react";

const NestedRoutes = () => {
  return (
    <div
      className="flex flex-col g-5"
    >
      <h2>NestedRoutes parent page</h2>
      <Link className="text-red-400" href="/nested-routes/first">First Page</Link>
      <Link className="text-blue-400" href="/nested-routes/second">Second Page</Link>
    </div>
  );
};

export default NestedRoutes;
