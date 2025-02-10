import React from "react";
import { Metadata } from "next";

// export const metadata: Metadata = {
//   title: "Blog", //! bu şekilde ana layout daki templete de alır: Blog | Merhaba... şeklinde olur.
// };
export const metadata: Metadata = {
  title: {
    absolute: "Blog", //! Bu şekilde ise ana layout u ezer ve sadece bunu alır.
  },
};

const BlogPage = () => {
  return <div>BlogPage</div>;
};

export default BlogPage;
