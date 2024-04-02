import StreamVideoProvider from "@/providers/streamClientProvider";
import type { Metadata } from "next";
import React, { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Yoom",
  description: "Video Calling app for everyone",
  icons: "/icons/logo.svg",
};

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main>
      <StreamVideoProvider>{children}</StreamVideoProvider>
    </main>
  );
};

export default RootLayout;
