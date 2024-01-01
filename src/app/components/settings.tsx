"use client";

import { ISettings } from "./content";

export default function Settings({
  settings,
  setSettings,
}: {
  settings: ISettings;
  setSettings: Function;
}) {
  return (
    <section className="h-full w-full p-8 rounded-xl border-[2px] border-solid border-neutral-500 border-opacity-25 flex flex-col justify-center gap-6">
      <div className="flex flex-col gap-3">
        <p className="font-semibold text-xl opacity-80">
          Características da Senha
        </p>
        <ul className="grid grid-cols-4 gap-4 h-7">
          <li
            onClick={() =>
              setSettings((prev: any) => ({
                ...prev,
                passwordContent: {
                  ...prev.passwordContent,
                  uppercase: !prev.passwordContent.uppercase,
                },
              }))
            }
            className={`cursor-pointer rounded-[1000px] select-none	 border border-solid px-4 text-[12px] leading-[1] grid place-items-center font-semibold ${
              settings.passwordContent.uppercase
                ? "text-main bg-main bg-opacity-10 border-main"
                : "opacity-50 border-theme-foreground"
            }`}
          >
            ABC
          </li>
          <li
            onClick={() =>
              setSettings((prev: any) => ({
                ...prev,
                passwordContent: {
                  ...prev.passwordContent,
                  lowercase: !prev.passwordContent.lowercase,
                },
              }))
            }
            className={`cursor-pointer rounded-[1000px] select-none	 border border-solid px-4 text-[12px] leading-[1] grid place-items-center font-semibold ${
              settings.passwordContent.lowercase
                ? "text-main bg-main bg-opacity-10 border-main"
                : "opacity-50 border-theme-foreground"
            }`}
          >
            abc
          </li>
          <li
            onClick={() =>
              setSettings((prev: any) => ({
                ...prev,
                passwordContent: {
                  ...prev.passwordContent,
                  numbers: !prev.passwordContent.numbers,
                },
              }))
            }
            className={`cursor-pointer rounded-[1000px] select-none	 border border-solid px-4 text-[12px] leading-[1] grid place-items-center font-semibold ${
              settings.passwordContent.numbers
                ? "text-main bg-main bg-opacity-10 border-main"
                : "opacity-50 border-theme-foreground"
            }`}
          >
            123
          </li>
          <li
            onClick={() =>
              setSettings((prev: any) => ({
                ...prev,
                passwordContent: {
                  ...prev.passwordContent,
                  symbols: !prev.passwordContent.symbols,
                },
              }))
            }
            className={`cursor-pointer rounded-[1000px] select-none	 border border-solid px-4 text-[12px] leading-[1] grid place-items-center font-semibold ${
              settings.passwordContent.symbols
                ? "text-main bg-main bg-opacity-10 border-main"
                : "opacity-50 border-theme-foreground"
            }`}
          >
            !@#
          </li>
        </ul>
      </div>
      <div className="flex flex-col gap-3">
        <p className="font-semibold text-xl opacity-80">Tamanho da Senha</p>
        <input
          className="max-w-14 rounded-[4px] h-[35px] bg-neutral-500 bg-opacity-25 px-[10px] focus-visible:outline-none"
          type="number"
          value={settings.length}
          onChange={(e) =>
            setSettings((prev: any) => ({
              ...prev,
              length: parseInt(e.target.value),
            }))
          }
        />
      </div>
    </section>
  );
}
