import { useState } from "react";
import { createRoot } from "react-dom/client";
import * as UI from "earthling-ui";
import { Button } from "earthling-ui/button";
import "./styles.css";

function App() {
  const [dark, setDark] = useState(false);
  const [range, setRange] = useState([25, 75]);
  const [tab, setTab] = useState("overview");
  return (
    <main className="mx-auto max-w-5xl space-y-8 p-6 sm:p-12">
      <header className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="text-sm text-muted-foreground">
            EARTHLING UI / COMPONENT REVIEW
          </p>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight">
            Built to feel natural.
          </h1>
        </div>
        <Button
          material="outline"
          onClick={() => {
            setDark(!dark);
            document.documentElement.dataset.theme = dark ? "light" : "dark";
          }}
        >
          Toggle theme
        </Button>
      </header>
      <div className="grid gap-6 md:grid-cols-2">
        <UI.Card material="paper">
          <UI.CardHeader>
            <UI.CardTitle>Everyday controls</UI.CardTitle>
            <UI.CardDescription>
              Clear feedback, quiet details.
            </UI.CardDescription>
          </UI.CardHeader>
          <UI.CardContent className="space-y-5">
            <div className="flex flex-wrap gap-2">
              <Button>Primary</Button>
              <Button scheme="secondary">Secondary</Button>
              <Button material="outline">Outline</Button>
              <Button material="ghost">Ghost</Button>
            </div>
            <div className="flex flex-wrap gap-2">
              <Button loading>Saving changes</Button>
              <Button disabled>Disabled</Button>
              <Button scheme="bad">Delete</Button>
            </div>
            <div className="space-y-2">
              <UI.Label htmlFor="email">Email address</UI.Label>
              <UI.Input
                id="email"
                type="email"
                className="w-full"
                placeholder="you@earthling.dev"
              />
            </div>
            <UI.TextArea
              aria-label="Project notes"
              className="w-full"
              placeholder="A little space for your next idea."
            />
            <div className="flex flex-wrap items-center gap-5">
              <label className="flex items-center gap-2">
                <UI.Checkbox defaultChecked /> Updates
              </label>
              <label className="flex items-center gap-2">
                <UI.Switch defaultChecked /> Available
              </label>
            </div>
          </UI.CardContent>
        </UI.Card>
        <UI.Card material="glass">
          <UI.CardHeader>
            <UI.CardTitle>Useful by default</UI.CardTitle>
            <UI.CardDescription>
              Range inputs and accessible feedback.
            </UI.CardDescription>
          </UI.CardHeader>
          <UI.CardContent className="space-y-5">
            <div className="flex flex-wrap gap-2">
              <UI.Badge scheme="good">Healthy</UI.Badge>
              <UI.Badge scheme="caution">Review</UI.Badge>
              <UI.Badge scheme="bad">Action needed</UI.Badge>
            </div>
            <div className="space-y-3">
              <p className="text-sm tabular-nums">Range {range.join(" – ")}</p>
              <UI.Slider
                value={range}
                onValueChange={setRange}
                thumbLabels={["Minimum", "Maximum"]}
              />
            </div>
            <div className="space-y-2">
              <p className="text-sm">Project progress</p>
              <UI.Progress value={25} max={50} aria-label="Project progress" />
            </div>
            <UI.Progress value={null} aria-label="Loading preview" />
            <UI.Table>
              <UI.TableHeader>
                <UI.TableRow>
                  <UI.TableHead>Resource</UI.TableHead>
                  <UI.TableHead numeric>Usage</UI.TableHead>
                </UI.TableRow>
              </UI.TableHeader>
              <UI.TableBody>
                <UI.TableRow>
                  <UI.TableCell>Components</UI.TableCell>
                  <UI.TableCell numeric>40</UI.TableCell>
                </UI.TableRow>
                <UI.TableRow>
                  <UI.TableCell>Completion</UI.TableCell>
                  <UI.TableCell numeric>50%</UI.TableCell>
                </UI.TableRow>
              </UI.TableBody>
            </UI.Table>
          </UI.CardContent>
        </UI.Card>
      </div>
      <UI.Tabs
        selectedKey={tab}
        onSelectionChange={(key) => setTab(String(key))}
      >
        <UI.TabList aria-label="Review sections">
          <UI.Tab id="overview">Overview</UI.Tab>
          <UI.Tab id="details">Details</UI.Tab>
        </UI.TabList>
        <UI.TabPanel id="overview">
          <p className="py-4 text-sm text-muted-foreground">
            Use Tab and arrow keys to review focus and selection.
          </p>
        </UI.TabPanel>
        <UI.TabPanel id="details">
          <p className="py-4 text-sm">
            Components retain their accessible primitive behavior.
          </p>
        </UI.TabPanel>
      </UI.Tabs>
      <div className="flex flex-wrap items-center gap-4">
        <UI.ToggleGroup
          type="multiple"
          defaultValue={["grid"]}
          aria-label="View options"
        >
          <UI.ToggleGroupItem value="grid">Grid</UI.ToggleGroupItem>
          <UI.ToggleGroupItem value="list">List</UI.ToggleGroupItem>
        </UI.ToggleGroup>
        <UI.Select defaultValue="comfortable">
          <UI.SelectTrigger aria-label="Density">
            <UI.SelectValue />
          </UI.SelectTrigger>
          <UI.SelectContent>
            <UI.SelectItem value="comfortable">Comfortable</UI.SelectItem>
            <UI.SelectItem value="compact">Compact</UI.SelectItem>
          </UI.SelectContent>
        </UI.Select>
        <UI.Avatar>
          <UI.AvatarFallback>EU</UI.AvatarFallback>
        </UI.Avatar>
      </div>
      <UI.Alert scheme="caution">
        <UI.AlertTitle>Ready for review</UI.AlertTitle>
        <UI.AlertDescription>
          Semantic color stays readable in both themes.
        </UI.AlertDescription>
      </UI.Alert>
      <UI.Accordion>
        <UI.AccordionItem id="more">
          <UI.AccordionTrigger>Made for your ecosystem</UI.AccordionTrigger>
          <UI.AccordionContent>
            Import the library or own the source. The same theme and accessible
            defaults apply.
          </UI.AccordionContent>
        </UI.AccordionItem>
      </UI.Accordion>
      <div className="flex flex-wrap gap-3">
        <UI.Dialog>
          <UI.DialogTrigger asChild>
            <Button>Open dialog</Button>
          </UI.DialogTrigger>
          <UI.DialogContent>
            <UI.DialogHeader>
              <UI.DialogTitle>A little room to focus</UI.DialogTitle>
              <UI.DialogDescription>
                Focus stays here until you close this dialog.
              </UI.DialogDescription>
            </UI.DialogHeader>
            <UI.Input aria-label="Dialog note" placeholder="Write a note" />
            <UI.DialogFooter>
              <UI.DialogClose asChild>
                <Button>Done</Button>
              </UI.DialogClose>
            </UI.DialogFooter>
            <UI.DialogExitButton />
          </UI.DialogContent>
        </UI.Dialog>
        <UI.DropdownMenu>
          <UI.DropdownMenuTrigger asChild>
            <Button material="outline">Open menu</Button>
          </UI.DropdownMenuTrigger>
          <UI.DropdownMenuContent>
            <UI.DropdownMenuLabel>Workspace</UI.DropdownMenuLabel>
            <UI.DropdownMenuItem>Settings</UI.DropdownMenuItem>
            <UI.DropdownMenuItem>Share project</UI.DropdownMenuItem>
            <UI.DropdownMenuSeparator />
            <UI.DropdownMenuItem disabled>Archived</UI.DropdownMenuItem>
          </UI.DropdownMenuContent>
        </UI.DropdownMenu>
        <UI.TooltipProvider>
          <UI.Tooltip>
            <UI.TooltipTrigger asChild>
              <Button material="ghost">Hover for help</Button>
            </UI.TooltipTrigger>
            <UI.TooltipContent>
              Thoughtful defaults, yours to change.
            </UI.TooltipContent>
          </UI.Tooltip>
        </UI.TooltipProvider>
      </div>
    </main>
  );
}
createRoot(document.getElementById("root")!).render(<App />);
