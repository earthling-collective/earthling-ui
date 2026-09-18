"use client";

import type { ComponentProps } from "react";
import { Button } from "earthling-ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "earthling-ui/card";

type CardExampleProps = Pick<ComponentProps<typeof Card>, "material">;

export default function Example(props: CardExampleProps) {
  return (
    <Card {...props} className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Weekly digest</CardTitle>
        <CardDescription>
          A concise summary of activity across your workspace.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <dl className="grid grid-cols-2 gap-3 text-sm">
          <div>
            <dt className="text-muted-foreground">Updates</dt>
            <dd className="mt-1 text-2xl font-semibold tabular-nums">24</dd>
          </div>
          <div>
            <dt className="text-muted-foreground">Contributors</dt>
            <dd className="mt-1 text-2xl font-semibold tabular-nums">8</dd>
          </div>
        </dl>
      </CardContent>
      <CardFooter className="justify-end gap-2">
        <Button material="ghost" type="button">
          Dismiss
        </Button>
        <Button type="button">Open digest</Button>
      </CardFooter>
    </Card>
  );
}
