"use client";

import { useEffect, useState } from "react";

export const useScrollSpy = (ids: string[]) => {
  const [active, setActive] = useState<string[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActive((prev) => [...prev, entry.target.id]);
        } else {
          setActive((prev) => prev.filter((id) => id !== entry.target.id));
        }
      });
    });

    ids.forEach((id) => {
      const element = document.getElementById(id);
      if (!element) return;
      observer.observe(element);
    });

    return () => {
      ids.forEach((id) => {
        const element = document.getElementById(id);
        if (!element) return;
        observer.unobserve(element);
      });
    };
  }, [...ids]);

  return active;
};
