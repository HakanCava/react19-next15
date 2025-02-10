import { Metadata } from "next";
import { notFound } from "next/navigation";
import React from "react";

type Props = { params: Promise<{ routeId: string; secondRouteId: string }> };

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const { routeId, secondRouteId } = await params;
  return {
    title: `DynamicRouteFirst ${routeId} - DynamicRouteSecond ${secondRouteId} `,
  };
};

const DynamicRouteSecond = async ({ params }: Props) => {
  //   const secondRouteId = (await params).secondRouteId;
  //   const routeId = (await params).routeId;
  const { routeId, secondRouteId } = await params;

  if (parseInt(secondRouteId) > 1000) {
    notFound();
  }

  return (
    <div>
      <p>DynamicRouteSecondId: {secondRouteId}</p>
      <p>DynamicRouteId: {routeId}</p>
    </div>
  );
};

export default DynamicRouteSecond;
