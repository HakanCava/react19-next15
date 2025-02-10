import React, { use } from "react";

type Params = Promise<{ routeId: string }>;

// const EachDynamicRoute = async ({ params }: { params: Params }) => {
//   const routeId = (await params).routeId;
//   return <div>EachDynamicRoute: {routeId}</div>;
// };

//! use async functionda kullanılmaz

const EachDynamicRoute = ({ params }: { params: Params }) => {
  const paramsValue = use(params);
  return <div>EachDynamicRoute: {paramsValue.routeId}</div>;
};

export default EachDynamicRoute;
