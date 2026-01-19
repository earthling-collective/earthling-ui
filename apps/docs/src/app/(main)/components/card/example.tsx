import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "earthling-ui/card";
import { Button } from "earthling-ui/button";

export default function (props: Record<string, any>) {
  return (
    <Card {...props} className="w-[350px]">
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card Description</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Card content goes here.</p>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button material="ghost">Cancel</Button>
        <Button>Continue</Button>
      </CardFooter>
    </Card>
  );
}
