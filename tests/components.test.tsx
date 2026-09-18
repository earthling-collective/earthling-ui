import { describe, expect, test } from "bun:test";
import { renderToStaticMarkup } from "react-dom/server";

import { Button } from "../packages/earthling-ui/src/components/button";
import {
  ColorArea,
  ColorField,
  ColorPicker,
  ColorSlider,
  parseColor,
} from "../packages/earthling-ui/src/components/color-picker";
import { Progress } from "../packages/earthling-ui/src/components/progress";
import { Slider } from "../packages/earthling-ui/src/components/slider";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../packages/earthling-ui/src/components/table";

describe("Button", () => {
  test("preserves native submit semantics by leaving type unset", () => {
    const markup = renderToStaticMarkup(<Button>Save</Button>);

    expect(markup).toStartWith("<button");
    expect(markup).not.toContain("type=");
    expect(markup).toContain(">Save</button>");
  });

  test("loading preserves label layout, reports busy, and disables native interaction", () => {
    const markup = renderToStaticMarkup(<Button loading>Publish</Button>);

    expect(markup).toContain('disabled=""');
    expect(markup).toContain('aria-disabled="true"');
    expect(markup).toContain('aria-busy="true"');
    expect(markup).toContain('opacity-0">Publish</span>');
    expect(markup).not.toContain("invisible");
    expect(markup).toContain('aria-hidden="true"');
    expect(markup).not.toContain("loading=");
  });

  test("caller sizing classes override variant defaults without leaking variant props", () => {
    const markup = renderToStaticMarkup(
      <Button size="md" scheme="good" className="h-12 px-8 test-hook">
        Continue
      </Button>,
    );

    expect(markup).toContain("h-12");
    expect(markup).toContain("px-8");
    expect(markup).toContain("test-hook");
    expect(markup).not.toContain("h-10");
    expect(markup).not.toContain("px-4");
    expect(markup).not.toContain('size="md"');
    expect(markup).toContain('data-scheme="good"');
    expect(markup).not.toContain(' scheme="good"');
  });
});

describe("Slider", () => {
  test("renders one labeled thumb for each controlled range value", () => {
    const markup = renderToStaticMarkup(
      <Slider value={[20, 80]} thumbLabels={["Minimum", "Maximum"]} />,
    );

    expect(markup.match(/role="slider"/g)).toHaveLength(2);
    expect(markup).toContain("left:20%;right:20%");
    expect(markup).toContain('aria-label="Minimum"');
    expect(markup).toContain('aria-label="Maximum"');
    expect(markup).not.toContain("thumbLabels");
  });

  test("renders default range values with vertical orientation semantics", () => {
    const markup = renderToStaticMarkup(
      <Slider defaultValue={[10, 90]} orientation="vertical" />,
    );

    expect(markup.match(/role="slider"/g)).toHaveLength(2);
    expect(markup).toContain('aria-orientation="vertical"');
    expect(markup).toContain('data-orientation="vertical"');
    expect(markup).toContain("bottom:10%;top:10%");
  });
});

describe("Progress", () => {
  test("clamps values to a valid custom maximum", () => {
    const markup = renderToStaticMarkup(<Progress value={75} max={50} />);

    expect(markup).toContain('role="progressbar"');
    expect(markup).toContain('aria-valuemax="50"');
    expect(markup).toContain('aria-valuenow="50"');
    expect(markup).toContain('data-state="complete"');
    expect(markup).toContain("transform:translateX(-0%)");
  });

  test("normalizes invalid maxima and negative values", () => {
    const markup = renderToStaticMarkup(<Progress value={-20} max={0} />);

    expect(markup).toContain('aria-valuemax="100"');
    expect(markup).toContain('aria-valuenow="0"');
    expect(markup).toContain("transform:translateX(-100%)");
  });

  test("omits determinate value markup when indeterminate", () => {
    const markup = renderToStaticMarkup(<Progress />);

    expect(markup).toContain('data-state="indeterminate"');
    expect(markup).not.toContain("aria-valuenow");
    expect(markup).not.toContain("style=");
  });
});

describe("Table numeric cells", () => {
  test("adds numeric semantics and lets caller alignment override defaults", () => {
    const markup = renderToStaticMarkup(
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead numeric>Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell numeric className="text-left test-cell">
              1,234
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>,
    );

    expect(markup).toContain('<th data-numeric="true"');
    expect(markup).toContain("tabular-nums");
    expect(markup).toContain("text-left");
    expect(markup).toContain("test-cell");
    expect(markup.match(/text-right/g)).toHaveLength(1);
    expect(markup).not.toContain(" numeric=");
  });
});

describe("Color picker composition", () => {
  test("renders custom area, slider, and field children", () => {
    const markup = renderToStaticMarkup(
      <ColorPicker defaultValue={parseColor("#ff0000")}>
        <ColorArea
          isDisabled
          className={({ isDisabled }) =>
            isDisabled ? "area-disabled-callback" : "area-enabled-callback"
          }
          colorSpace="hsb"
          xChannel="saturation"
          yChannel="brightness"
        >
          <span data-custom="area">Area child</span>
        </ColorArea>
        <ColorSlider colorSpace="hsl" channel="hue">
          <span data-custom="slider">Slider child</span>
        </ColorSlider>
        <ColorField>
          <span data-custom="field">Field child</span>
        </ColorField>
      </ColorPicker>,
    );

    expect(markup).toContain('data-custom="area"');
    expect(markup).toContain("area-disabled-callback");
    expect(markup).not.toContain("area-enabled-callback");
    expect(markup).toContain('data-custom="slider"');
    expect(markup).toContain('data-custom="field"');
    expect(markup).toContain("Area child");
    expect(markup).toContain("Slider child");
    expect(markup).toContain("Field child");
  });
});
