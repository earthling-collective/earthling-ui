import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "earthling-ui/hover-card";
import { Avatar, AvatarFallback, AvatarImage } from "earthling-ui/avatar";
import { Button } from "earthling-ui/button";

export default function (props: Record<string, any>) {
  return (
    <HoverCard {...props}>
      <HoverCardTrigger asChild>
        <Button material="ghost">@earthling-ui</Button>
      </HoverCardTrigger>
      <HoverCardContent className="w-80">
        <div className="flex justify-between space-x-4">
          <Avatar>
            <AvatarImage src="https://github.com/earthling-dev.png" />
            <AvatarFallback>EU</AvatarFallback>
          </Avatar>
          <div className="space-y-1">
            <h4 className="text-sm font-semibold">@earthling-ui</h4>
            <p className="text-sm">
              A component library for the web – built with Radix UI and Tailwind
              CSS.
            </p>
            <div className="flex items-center pt-2">
              <i className="icon-[lucide--calendar-days] mr-2 h-4 w-4 opacity-70" />
              <span className="text-xs text-muted-foreground">
                Joined December 2021
              </span>
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}
