import React from "react";
import { Metadata } from "next";

type Props = { params: Promise<{ routeId: string }> };

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const id = (await params).routeId;
  const title = await new Promise((resolve) => { //! real-world senario
    setTimeout(() => {
      resolve(`DynamicRouteFirst ${id}`);
    }, 100);
  });
  return {
    title: `${title}`,
  };
};

const DynamicRouteFirst = async ({ params }: Props) => {
  const routeId = (await params).routeId;

  return <div>DynamicRouteFirst: {routeId}</div>;
};

export default DynamicRouteFirst;
