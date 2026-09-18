"use client";
import { useState } from "react";
import { ToggleGroup, ToggleGroupItem } from "earthling-ui/toggle-group";
export function ThemeSwitch({ initialTheme }: { initialTheme: string }) {
  const [theme, setTheme] = useState(initialTheme);
  return (
    <ToggleGroup
      type="single"
      size="sm"
      value={theme}
      aria-label="Color theme"
      onValueChange={(value) => {
        if (!value) return;
        setTheme(value);
        document.documentElement.dataset.theme = value;
        document.cookie =
          "theme=" + value + ";path=/;max-age=31536000;SameSite=Lax";
      }}
    >
      <ToggleGroupItem value="system" aria-label="System theme">
        <i aria-hidden="true" className="icon-[lucide--monitor]" />
      </ToggleGroupItem>
      <ToggleGroupItem value="light" aria-label="Light theme">
        <i aria-hidden="true" className="icon-[lucide--sun]" />
      </ToggleGroupItem>
      <ToggleGroupItem value="dark" aria-label="Dark theme">
        <i aria-hidden="true" className="icon-[lucide--moon]" />
      </ToggleGroupItem>
    </ToggleGroup>
  );
}
