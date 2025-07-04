import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "HTS Backend",
  description: "Generated by create next app",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
