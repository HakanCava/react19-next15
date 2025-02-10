// import Link from "next/link";
// import React from "react";

// const Products = async ({
//   params,
//   searchParams,
// }: {
//   params: Promise<{ productId: string }>;
//   searchParams: Promise<{ lang?: "en" | "tr" }>;
// }) => {
//   const { productId } = await params;
//   const { lang = "en" } = await searchParams;
//   return (
//     <div>
//       <h1>New product id: {productId}</h1>
//       <p>Reading in laguage: {lang}</p>
//       <div className="flex flex-col">
//         <Link href={`/products/${productId}?lang=en`}>English</Link>
//         <Link href={`/products/${productId}?lang=tr`}>Turkish</Link>
//       </div>
//     </div>
//   );
// };

// export default Products;

//! use ile kullanım:

"use client";
import Link from "next/link";
import React, { use } from "react";

const Products = ({
  params,
  searchParams,
}: {
  params: Promise<{ productId: string }>;
  searchParams: Promise<{ lang?: "en" | "tr" }>;
}) => {
  const { productId } = use(params);
  const { lang = "en" } = use(searchParams);
  return (
    <div>
      <h1>New product id: {productId}</h1>
      <p>Reading in laguage: {lang}</p>
      <div className="flex flex-col">
        <Link href={`/products/${productId}?lang=en`}>English</Link>
        <Link href={`/products/${productId}?lang=tr`}>Turkish</Link>
      </div>
    </div>
  );
};

export default Products;
