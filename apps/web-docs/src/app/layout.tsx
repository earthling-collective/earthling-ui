import "windi.css";
import "~/global.css";

export const metadata = {
  title: {
    default: "Earthling UI",
  },
  description:
    "Framework tools and shared elements to speed up development of websites and apps",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
