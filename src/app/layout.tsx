import type { PropsWithChildren } from "react";
import type { Metadata } from "next";

import { ReactScanScript } from "@ui-core/components/server/scripts/react-scan-script";

import { inter } from "@ui-core/fonts/inter.font";

import { Providers } from "@ui-core/providers/providers/providers.provider";

import "@ui-core/styles/main.css";

export const metadata: Metadata = {
  title: "GNetwork",
  description: "Gnetwork Communication Chat",
};

export default function RootLayout({ children }: Readonly<PropsWithChildren>) {
  return (
    <html suppressHydrationWarning lang="en">
      <head>
        <ReactScanScript />
      </head>
      <body
        className={`${inter.variable} antialiased bg-background text-foreground`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
