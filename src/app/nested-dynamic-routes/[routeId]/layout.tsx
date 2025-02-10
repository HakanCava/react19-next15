import React from "react";

const PageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <h2>Page loyout</h2>
      {children}
    </div>
  );
};

export default PageLayout;
