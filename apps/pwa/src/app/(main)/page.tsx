import Link from "next/link";
import { Surface } from "earthling-ui/surface";
import pkg from "../../../../../packages/earthling-ui/package.json";

export default async function () {
  return (
    <div className="container mx-auto max-w-6xl px-4 xl:px-0">
      <div className="mx-auto my-16 max-w-sm md:max-w-6xl">
        <div className="mb-4 flex justify-center">
          <div className="relative flex flex-row items-center gap-2 rounded-full border border-current/10 bg-current/5 px-3 py-1 text-xs font-medium text-current/60">
            {pkg.version.includes("alpha") && (
              <span className="text-yellow-500">Alpha</span>
            )}
            <span className="text-current/50">v{pkg.version}</span>
          </div>
        </div>
        <div className="text-center">
          <h1 className="text-2xl font-semibold tracking-tight text-balance md:text-4xl">
            Components at your command — mix, match, and modify
            {/* Build boldly. Tweak freely. Ship unapologetically. */}
          </h1>
          <p className="text-md mt-4 font-light text-pretty text-current/60 md:text-lg">
            Import components à la carte or eject them into your project via
            CLI. Never rebuild the wheel.
            {/* Import components à la carte, install them via CLI, or copy-paste
            code—your workflow, your rules. */}
            {/* zero-fluff components designed for tomorrow's web.
            <br /> Start small, scale effortlessly, and own every pixel. */}
            {/* Your workflow isn’t one-size-fits-all. Neither is your UI.
            <br />
            Build, borrow, or bend components without rebuilding the wheel. */}
          </p>
        </div>
      </div>

      <div className="my-8 grid grid-cols-3 gap-4">
        {[
          {
            title: "Button",
            subtitle: "",
            href: "/components/button",
          },
          { title: "Input", subtitle: "", href: "/components/input" },
          {
            title: "Surface",
            subtitle: "",
            href: "/components/surface",
          },
          {
            title: "Textarea",
            subtitle: "",
            href: "/components/textarea",
          },
        ]
          .sort((a, b) =>
            a.title > b.title ? 1 : a.title === b.title ? 0 : -1,
          )
          .map(({ title, subtitle, href }, i) => (
            <Surface interactive asChild className="col-span-3 md:col-span-1">
              <Link href={href}>
                <h3 className="font-medium">{title}</h3>
                <p className="text-sm text-current/60">{subtitle}</p>
              </Link>
            </Surface>
          ))}
      </div>
    </div>
  );
}
