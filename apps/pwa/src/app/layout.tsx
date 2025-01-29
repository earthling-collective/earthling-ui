import "@/styles/main.css";
import type { Metadata } from "next";
import { cookies } from "next/headers";
import LocalFont from "next/font/local";
import { Geist } from "next/font/google";

const displayFont = LocalFont({
  src: "./font.otf",
  variable: "--font-display",
});
const bodyFont = Geist({ subsets: ["latin"], variable: "--font-body" });
const monoFont = LocalFont({ src: "./font.otf", variable: "--font-mono" });

export const metadata: Metadata = {
  title: "Earthling UI",
  description:
    "A modern, themeable React component library built with TypeScript and Tailwind CSS.",
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
      <body className="antialiased">{children}</body>
    </html>
  );
}
