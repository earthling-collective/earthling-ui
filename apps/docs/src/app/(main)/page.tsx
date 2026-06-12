import Link from "next/link";
import { Surface } from "earthling-ui/surface";
import { Button } from "earthling-ui/button";
import { Badge } from "earthling-ui/badge";
import { Code } from "@/components/code";
import pkg from "../../../../../packages/earthling-ui/package.json";
import {
  componentCategories,
  componentInformation,
} from "@/lib/component-info";

const features = [
  {
    icon: "icon-[lucide--palette]",
    title: "One scheme system, every component",
    description:
      "Eight semantic color schemes — primary through bad — work identically across all 40 components, powered by CSS custom properties.",
  },
  {
    icon: "icon-[lucide--package-open]",
    title: "Import it, or own it",
    description:
      "Import components à la carte for zero-config use, or eject any component's source into your project when you need full control.",
  },
  {
    icon: "icon-[lucide--server]",
    title: "Ready for any stack",
    description:
      "React Server Components, Next.js, Vite, CommonJS — every module ships with the right directives, formats, and types.",
  },
];

export default async function () {
  return (
    <>
      <main className="col-span-3 flex flex-1 flex-col px-4 xl:col-span-1">
        <div className="container mx-auto max-w-6xl">
          {/* Hero */}
          <div className="mx-auto my-16 max-w-md md:my-24 md:max-w-6xl">
            <div className="mb-4 flex justify-center">
              <div className="relative flex flex-row items-center gap-2 rounded-full border border-current/10 bg-current/5 px-3 py-1 text-xs font-medium text-current/60">
                {pkg.version.includes("alpha") && (
                  <span className="text-yellow-500">Alpha</span>
                )}
                <span className="text-current/50">v{pkg.version}</span>
              </div>
            </div>
            <div className="text-center">
              <h1 className="text-3xl font-semibold tracking-tight text-balance md:text-5xl">
                Components at your command — mix, match, and modify
              </h1>
              <p className="text-md mt-4 font-light text-pretty text-current/60 md:text-lg">
                {componentInformation.length} accessible React components built
                on Tailwind CSS 4 and Radix primitives. Import them à la carte
                or eject them into your project via CLI.
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                <Button scheme="primary" size="lg" asChild>
                  <Link href="/getting-started">Get started</Link>
                </Button>
                <Button material="outline" scheme="neutral" size="lg" asChild>
                  <Link href="/#components">Browse components</Link>
                </Button>
              </div>
              <div className="mx-auto mt-8 max-w-md text-left">
                <Code language="shell">{`bunx earthling-ui eject button`}</Code>
              </div>
            </div>
          </div>

          {/* Value props */}
          <div className="my-16 grid grid-cols-1 gap-4 md:grid-cols-3">
            {features.map((feature) => (
              <Surface key={feature.title} className="flex flex-col gap-3 p-6">
                <i className={`size-6 ${feature.icon}`} />
                <h3 className="font-semibold">{feature.title}</h3>
                <p className="text-sm text-current/60">{feature.description}</p>
              </Surface>
            ))}
          </div>

          {/* Component showcase */}
          <div id="components" className="my-16 scroll-mt-[81px]">
            <div className="mb-8 text-center">
              <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
                Every component you need
              </h2>
              <p className="mt-2 font-light text-current/60">
                {componentInformation.length} components, organized by what
                they do.
              </p>
            </div>

            <div className="flex flex-col gap-12">
              {componentCategories.map((category) => {
                const components = category.paths
                  .map((path) =>
                    componentInformation.find((c) => c.path === path),
                  )
                  .filter((c) => c !== undefined)
                  .sort((a, b) => a.name.localeCompare(b.name));

                return (
                  <section key={category.name}>
                    <div className="mb-4 flex items-center gap-3">
                      <i className={`size-5 ${category.icon}`} />
                      <h3 className="text-lg font-semibold">{category.name}</h3>
                      <Badge scheme="muted">{components.length}</Badge>
                    </div>
                    <p className="mb-4 text-sm font-light text-current/60">
                      {category.description}
                    </p>
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                      {components.map(({ name, path, description }) => (
                        <Surface
                          key={path}
                          interactive
                          asChild
                          className="shadow-xs"
                        >
                          <Link href={`/components/${path}`}>
                            <h4 className="font-semibold">{name}</h4>
                            <p className="mt-1 text-sm font-light text-current/60">
                              {description}
                            </p>
                          </Link>
                        </Surface>
                      ))}
                    </div>
                  </section>
                );
              })}
            </div>
          </div>
        </div>
      </main>
      <aside className="hidden w-70 flex-col border-l border-transparent xl:flex"></aside>
    </>
  );
}
