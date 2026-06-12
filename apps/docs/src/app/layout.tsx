import "@/styles/main.css";
import type { Metadata } from "next";
import { cookies } from "next/headers";
import LocalFont from "next/font/local";
import { Geist, Geist_Mono } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";

const displayFont = LocalFont({
  src: "./font.otf",
  variable: "--font-display",
});
const bodyFont = Geist({ subsets: ["latin"], variable: "--font-body" });
const monoFont = Geist_Mono({ subsets: ["latin"], variable: "--font-mono" });

export const metadata: Metadata = {
  metadataBase: new URL("https://ui.earthling.dev"),
  title: {
    default: "Earthling UI",
    template: "%s — Earthling UI",
  },
  description:
    "A modern, themeable React component library built with TypeScript and Tailwind CSS. Import components à la carte or eject them into your project via CLI.",
  keywords: [
    "react",
    "components",
    "ui",
    "tailwind",
    "tailwindcss",
    "radix",
    "design system",
    "component library",
  ],
  openGraph: {
    siteName: "Earthling UI",
    type: "website",
    url: "https://ui.earthling.dev",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default async function ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jar = await cookies();
  const theme = jar.get("theme")?.value ?? "system";

  return (
    <html
      lang="en"
      data-theme={theme}
      className={`${displayFont.variable} ${bodyFont.variable} ${monoFont.variable}`}
    >
      <body className="antialiased">
        {children}
        {process.env.NEXT_PUBLIC_GA_ID && (
          <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
        )}
      </body>
    </html>
  );
}
