import Image from "next/image";
import Content from "./content.mdx";

export default function HomePage() {
  return (
    <main>
      <Image
        src={"/favicon/android-chrome-192x192.png"}
        width={44}
        height={44}
        alt="Earthling-UI"
      />
      <Content />
    </main>
  );
}
