import Link from "next/link";
import { Button } from "earthling-ui/button";
import { Code } from "@/components/code";
import catalog from "earthling-ui/catalog.json";
import {
  componentCategories,
  componentInformation,
} from "@/lib/component-info";
import { Showcase } from "./showcase";

export default function HomePage() {
  return (
    <main
      id="main-content"
      className="min-w-0 px-5 py-10 sm:px-8 lg:px-10 xl:col-span-2 xl:px-12"
    >
      <div className="mx-auto max-w-5xl">
        <section className="pt-2 pb-10 sm:pt-7 sm:pb-12">
          <Link
            href="/changelog"
            className="text-muted-foreground hover:text-foreground mb-7 inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs"
          >
            <span className="bg-foreground size-1.5 rounded-full" />v
            {catalog.version}
            <span aria-hidden="true">·</span>Built to evolve
            <i aria-hidden="true" className="icon-[lucide--arrow-up-right]" />
          </Link>
          <div className="grid items-end gap-7 md:grid-cols-[1.15fr_1fr]">
            <h1 className="text-[clamp(2.75rem,5.5vw,4.5rem)] leading-[1.05] font-semibold tracking-[-0.055em]">
              Your interface.
              <br />
              <span className="text-muted-foreground">Your source.</span>
            </h1>
            <div>
              <p className="text-muted-foreground max-w-md text-base leading-7">
                {componentInformation.length} React components with a shared
                visual language. Import what you need, or bring the source into
                your project.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button asChild>
                  <Link href="/getting-started">
                    Start building
                    <i
                      aria-hidden="true"
                      className="icon-[lucide--arrow-right]"
                    />
                  </Link>
                </Button>
                <Button asChild material="outline" scheme="neutral">
                  <Link href="#components">Explore components</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
        <Showcase />
        <section className="my-12 grid gap-8 border-b pb-12 md:grid-cols-2 md:gap-12">
          <div>
            <p className="text-muted-foreground mb-3 text-xs font-medium">
              01 / Start with an import
            </p>
            <h2 className="mb-3 text-xl font-semibold tracking-tight">
              A small addition to your stack.
            </h2>
            <p className="text-muted-foreground mb-5 text-sm leading-6">
              React 18 or 19. Tailwind CSS 4. Accessible foundations from Radix
              and React Aria, with shared color, shape, and motion conventions.
            </p>
            <Code language="bash">npm install earthling-ui</Code>
          </div>
          <div>
            <p className="text-muted-foreground mb-3 text-xs font-medium">
              02 / Make it your own
            </p>
            <h2 className="mb-3 text-xl font-semibold tracking-tight">
              Take the implementation with you.
            </h2>
            <p className="text-muted-foreground mb-5 text-sm leading-6">
              Eject a component and its helpers when you need full control. The
              same starting point, with the source in your hands.
            </p>
            <Code language="bash">npx earthling-ui eject button</Code>
          </div>
        </section>
        <section id="components" className="pb-8">
          <div className="mb-8 flex items-end justify-between gap-5">
            <div>
              <p className="text-muted-foreground mb-2 text-xs font-medium">
                The collection
              </p>
              <h2 className="text-3xl font-semibold tracking-tight">
                Good pieces. Yours to put together.
              </h2>
            </div>
            <span className="text-muted-foreground hidden text-sm tabular-nums sm:block">
              {componentInformation.length} components
            </span>
          </div>
          <div className="grid gap-x-10 gap-y-10 md:grid-cols-2">
            {componentCategories.map((category) => (
              <section key={category.name}>
                <div className="mb-3 flex items-center gap-2.5">
                  <i
                    aria-hidden="true"
                    className={"text-muted-foreground size-4 " + category.icon}
                  />
                  <h3 className="text-sm font-semibold">{category.name}</h3>
                  <span className="text-muted-foreground ml-auto font-mono text-xs">
                    {String(category.paths.length).padStart(2, "0")}
                  </span>
                </div>
                <div className="divide-y border-y">
                  {category.paths.map((path) => {
                    const info = componentInformation.find(
                      (c) => c.path === path,
                    )!;
                    return (
                      <Link
                        key={path}
                        href={"/components/" + path}
                        className="group hover:bg-muted/40 focus-visible:outline-outline flex items-center justify-between gap-3 px-1 py-3 focus-visible:outline-2"
                      >
                        <div className="min-w-0">
                          <h4 className="text-sm font-medium">{info.name}</h4>
                          <p className="text-muted-foreground mt-0.5 line-clamp-1 text-xs leading-5">
                            {info.description}
                          </p>
                        </div>
                        <i
                          aria-hidden="true"
                          className="text-muted-foreground group-hover:text-foreground icon-[lucide--arrow-up-right] size-4 shrink-0"
                        />
                      </Link>
                    );
                  })}
                </div>
              </section>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
