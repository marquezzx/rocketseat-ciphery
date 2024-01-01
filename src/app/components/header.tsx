import { CiDark, CiLight } from "react-icons/ci";

import { PiGithubLogoLight } from "react-icons/pi";

export default function Header({
  switchTheme,
  theme,
}: {
  switchTheme: any;
  theme: "dark" | "light";
}) {
  return (
    <header className="flex items-center justify-between w-full">
      <div>
        <h1 className="font-extrabold text-[40px]">Ciphery</h1>
        <h2 className="text-[20px] opacity-50">
          Desbloqueie seu mundo com senhas seguras!
        </h2>
      </div>
      <div className="flex gap-2">
        <button
          onClick={switchTheme}
          className="bg-neutral-500 bg-opacity-25 h-8 w-8 rounded-[4px] hover:bg-opacity-40 grid place-items-center"
        >
          {theme === "light" ? <CiDark size={19} /> : <CiLight size={19} />}
        </button>
        <button
          onClick={() => window.open("https://github.com/marquezzx")}
          className="bg-neutral-500 bg-opacity-25 h-8 w-8 rounded-[4px] hover:bg-opacity-40 grid place-items-center"
        >
          <PiGithubLogoLight size={18} />
        </button>
      </div>
    </header>
  );
}
