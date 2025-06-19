"use client";
import { NextStudio } from "next-sanity/studio";
import config from "../../../sanity.config";
import { Suspense } from "react";
import ClientOnly from "@/components/ClientOnly";

export const dynamic = "force-static";

export default function StudioPage() {
  return (
    <ClientOnly>
      <Suspense fallback={<div>Loading...</div>}>
        <NextStudio config={config} />
      </Suspense>
    </ClientOnly>
  );
}
