import { Card, CardHeader, CardSubtitle, CardTitle } from "earthling-ui/card";

export default async function () {
  return (
    <div className="container mx-auto flow-root max-w-6xl">
      <div className="mx-auto my-16 max-w-6xl">
        <div className="mb-4 flex justify-center">
          <div className="relative rounded-full border border-current/10 bg-current/5 px-3 py-1 text-sm font-medium text-current/60">
            Coming Soon...
          </div>
        </div>
        <div className="text-center">
          <h1 className="text-4xl font-semibold tracking-tight text-balance">
            Components at your command — mix, match, and modify
            {/* Build boldly. Tweak freely. Ship unapologetically. */}
          </h1>
          <p className="mt-4 text-lg font-light text-pretty text-current/60">
            Import what you need, copy what you want. Never rebuild the wheel.
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

      {/* <div className="my-8 grid grid-cols-3 gap-4">
        {[
          { title: "Button", subtitle: "4 snippets" },
          { title: "Card", subtitle: "4 snippets" },
          { title: "Input", subtitle: "4 snippets" },
          { title: "Textarea", subtitle: "4 snippets" },
        ]
          .sort((a, b) =>
            a.title > b.title ? 1 : a.title === b.title ? 0 : -1,
          )
          .map(({ title, subtitle }, i) => (
            <Card key={i}>
              <CardHeader>
                <CardTitle>{title}</CardTitle>
                <CardSubtitle>{subtitle}</CardSubtitle>
              </CardHeader>
            </Card>
          ))}
      </div> */}
    </div>
  );
}
