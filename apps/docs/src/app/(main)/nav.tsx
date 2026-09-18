"use client";
import {
  componentCategories,
  componentInformation,
} from "@/lib/component-info";
import { pageInformation } from "@/lib/page-info";
import Link from "next/link";
import { usePathname } from "next/navigation";
export function Nav({ onNavigate }: { onNavigate?: () => void }) {
  const pathname = usePathname();
  const link = (href: string, label: string) => (
    <Link
      key={href}
      href={href}
      onClick={onNavigate}
      aria-current={pathname === href ? "page" : undefined}
      className="docs-nav-link"
    >
      {label}
    </Link>
  );
  return (
    <nav aria-label="Documentation" className="flex flex-col gap-6 px-4 py-7">
      <div>
        <p className="docs-nav-label">Get started</p>
        <div className="flex flex-col gap-0.5">
          {pageInformation.map((p) => link(p.href, p.label))}
        </div>
      </div>
      {componentCategories.map((category) => (
        <div key={category.name}>
          <p className="docs-nav-label">{category.name}</p>
          <div className="flex flex-col gap-0.5">
            {category.paths.map((path) => {
              const info = componentInformation.find((c) => c.path === path);
              return info ? link("/components/" + path, info.name) : null;
            })}
          </div>
        </div>
      ))}
    </nav>
  );
}
