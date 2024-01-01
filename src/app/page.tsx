"use client";

import Content from "./components/content";
import Header from "./components/header";
import { useState } from "react";

export default function Home() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  function switchTheme() {
    setTheme(theme === "dark" ? "light" : "dark");
  }
  return (
    <main
      data-theme={theme}
      className="bg-theme-background min-h-screen px-40 flex flex-col justify-center gap-12"
    >
      <Header switchTheme={switchTheme} theme={theme} />
      <Content />
    </main>
  );
}
