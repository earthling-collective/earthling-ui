import { Surface } from "earthling-ui/surface";

export default function (props: Record<string, any>) {
  return (
    <Surface {...props} className="max-w-md">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed molestie,
      nisl vel ultricies aliquet, ipsum nisi aliquam nisi, sit amet ullamcorper
      velit nisl in velit.
    </Surface>
  );
}
