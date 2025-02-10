import React from "react";
import Counter from "./counter";

export const metadata = {  //! metadata only works server component
  title: "Counter Page",
};

const CounterPage = () => {
  return <Counter />;
};

export default CounterPage;
