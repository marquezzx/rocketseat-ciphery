"use client";

import Password from "./password";
import Settings from "./settings";
import { useState } from "react";

export interface ISettings {
  length: number;
  passwordContent: {
    uppercase: boolean;
    lowercase: boolean;
    numbers: boolean;
    symbols: boolean;
  };
}

export default function Content() {
  const [settings, setSettings] = useState<ISettings>({
    length: 26,
    passwordContent: {
      uppercase: true,
      lowercase: true,
      numbers: true,
      symbols: true,
    },
  });
  return (
    <section className="flex items-center gap-10 h-[327.2px]">
      <Password settings={settings} />
      <Settings settings={settings} setSettings={setSettings} />
    </section>
  );
}
