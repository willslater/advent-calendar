"use client";
import { useEffect } from "react";

export default function Snow() {
  useEffect(() => {
    const count = 32;
    const nodes: HTMLDivElement[] = [];
    for (let i = 0; i < count; i++) {
      const el = document.createElement("div");
      el.className = "snowflake";
      el.style.left = Math.random() * 100 + "vw";
      el.style.animationDuration = 6 + Math.random() * 8 + "s";
      el.style.opacity = String(0.3 + Math.random() * 0.7);
      el.style.fontSize = 8 + Math.random() * 16 + "px";
      el.textContent = "❄";
      document.body.appendChild(el);
      nodes.push(el);
    }
    return () => nodes.forEach((n) => n.remove());
  }, []);
  return null;
}
