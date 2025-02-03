import Link from "next/link";
import { Surface } from "earthling-ui/surface";
import pkg from "../../../../../packages/earthling-ui/package.json";
import { componentInformation } from "@/lib/component-info";

export default async function () {
  return (
    <div className="container mx-auto max-w-6xl">
      <div className="mx-auto my-16 max-w-md md:max-w-6xl">
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
        {componentInformation
          .sort((a, b) => (a.name > b.name ? 1 : a.name === b.name ? 0 : -1))
          .filter((x) => x.status !== "future")
          .map(({ name, path }, i) => (
            <Surface
              interactive
              asChild
              className="col-span-3 shadow-xs md:col-span-1"
            >
              <Link href={`/components/${path}`}>
                <h3 className="font-semibold">{name}</h3>
              </Link>
            </Surface>
          ))}
      </div>
    </div>
  );
}
