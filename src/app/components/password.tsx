"use client";

import { useEffect, useState } from "react";

import Hashify from "@/lib/Hashify";
import { IBM_Plex_Mono } from "next/font/google";
import { ISettings } from "./content";
import { IoCheckmarkOutline } from "react-icons/io5";
import { MdCopyAll } from "react-icons/md";

const ibm_plex_mono = IBM_Plex_Mono({
  weight: "400",
  subsets: ["latin"],
});

export default function Password({ settings }: { settings: ISettings }) {
  const [hashingMode, setHashingMode] = useState<
    "MD5" | "sha256" | "sha512" | "ripemd160" | "sha1" | "sha384"
  >("MD5");
  const [currentPassword, setCurrentPassword] = useState<string>("Não gerada");
  const [copiedPassword, setCopiedPassword] = useState<boolean>(false);
  const [copiedHash, setCopiedHash] = useState<boolean>(false);
  const copyPassword = () => {
    if (!copiedPassword) {
      setCopiedPassword(true);
      navigator.clipboard.writeText(currentPassword);
      setTimeout(() => {
        setCopiedPassword(false);
      }, 3000);
    }
  };
  const copyHash = () => {
    if (!copiedHash) {
      setCopiedHash(true);
      navigator.clipboard.writeText(Hashify(hashingMode, currentPassword));
      setTimeout(() => {
        setCopiedHash(false);
      }, 3000);
    }
  };
  const [isCooldown, setIsCooldown] = useState<boolean>(false);
  const generatePassword = () => {
    if (isCooldown) {
      return;
    }
    setIsCooldown(true);

    const characters = `${
      settings.passwordContent.uppercase ? "ABCDEFGHIJKLMNOPQRSTUVWXYZ" : ""
    }${settings.passwordContent.lowercase ? "abcdefghijklmnopqrstuvwxyz" : ""}${
      settings.passwordContent.numbers ? "0123456789" : ""
    }${settings.passwordContent.symbols ? "!@#$%^&*()[]{}_+-=" : ""}`;
    let randomString = "";
    for (let i = 0; i < settings.length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      randomString += characters.charAt(randomIndex);
    }
    setCurrentPassword(randomString);
    setTimeout(() => {
      setIsCooldown(false);
    }, 3000);
  };

  useEffect(() => {
    setCopiedHash(false);
    setCopiedPassword(false);
  }, [currentPassword]);
  return (
    <section className="p-8 rounded-xl border-[2px] border-solid border-neutral-500 border-opacity-25 flex flex-col gap-9">
      <div className="flex flex-col gap-3">
        <p className="font-semibold text-xl opacity-80">Senha Padrão</p>
        <div className="flex gap-2 w-[686px]">
          <input
            type="text"
            value={currentPassword}
            disabled
            className={`${ibm_plex_mono.className} cursor-not-allowed w-full rounded-[4px] h-10 bg-neutral-500 bg-opacity-25 px-[10px] text-theme-foreground text-opacity-50 font-plex`}
          />
          <button
            onClick={copyPassword}
            className="h-10 w-10 flex-none bg-neutral-500 bg-opacity-25 rounded-[4px] grid place-items-center"
          >
            {copiedPassword ? (
              <IoCheckmarkOutline size={22} className="opacity-50" />
            ) : (
              <MdCopyAll size={18} className="opacity-50" />
            )}
          </button>
          <button
            onClick={generatePassword}
            className="px-6 rounded-[4px] h-10 bg-main text-white text-sm font-semibold"
          >
            Gerar
          </button>
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <p className="font-semibold text-xl opacity-80">Hash Gerado</p>
        <div className="flex gap-2 w-[686px]">
          <input
            type="text"
            value={
              currentPassword !== "Não gerada"
                ? Hashify(hashingMode, currentPassword)
                : ""
            }
            disabled
            className={`${ibm_plex_mono.className} cursor-not-allowed w-full rounded-[4px] h-10 bg-neutral-500 bg-opacity-25 px-[10px] text-theme-foreground text-opacity-50 font-plex`}
          />
          <button
            onClick={copyHash}
            className="w-[117px] rounded-[4px] h-10 bg-main text-white text-sm font-semibold flex items-center justify-center gap-1"
          >
            {copiedHash ? (
              <IoCheckmarkOutline size={17} />
            ) : (
              <MdCopyAll size={17} />
            )}
            {copiedHash ? "Copiado" : "Copiar"}
          </button>
        </div>
      </div>
      <footer className="flex gap-2">
        <button
          onClick={() => setHashingMode("MD5")}
          className={`px-4 h-7 rounded-[1000px] border border-solid text-[12px] font-semibold ${
            hashingMode === "MD5"
              ? "border-main bg-main bg-opacity-10 text-main"
              : "border-neutral-600 bg-transparent text-neutral-600"
          }`}
        >
          MD5
        </button>
        <button
          onClick={() => setHashingMode("sha1")}
          className={`px-4 h-7 rounded-[1000px] border border-solid text-[12px] font-semibold ${
            hashingMode === "sha1"
              ? "border-main bg-main bg-opacity-10 text-main"
              : "border-neutral-600 bg-transparent text-neutral-600"
          }`}
        >
          SHA-1
        </button>
        <button
          onClick={() => setHashingMode("sha256")}
          className={`px-4 h-7 rounded-[1000px] border border-solid text-[12px] font-semibold ${
            hashingMode === "sha256"
              ? "border-main bg-main bg-opacity-10 text-main"
              : "border-neutral-600 bg-transparent text-neutral-600"
          }`}
        >
          SHA-256
        </button>
        <button
          onClick={() => setHashingMode("sha384")}
          className={`px-4 h-7 rounded-[1000px] border border-solid text-[12px] font-semibold ${
            hashingMode === "sha384"
              ? "border-main bg-main bg-opacity-10 text-main"
              : "border-neutral-600 bg-transparent text-neutral-600"
          }`}
        >
          SHA-384
        </button>
        <button
          onClick={() => setHashingMode("sha512")}
          className={`px-4 h-7 rounded-[1000px] border border-solid text-[12px] font-semibold ${
            hashingMode === "sha512"
              ? "border-main bg-main bg-opacity-10 text-main"
              : "border-neutral-600 bg-transparent text-neutral-600"
          }`}
        >
          SHA-512
        </button>
        <button
          onClick={() => setHashingMode("ripemd160")}
          className={`px-4 h-7 rounded-[1000px] border border-solid text-[12px] font-semibold ${
            hashingMode === "ripemd160"
              ? "border-main bg-main bg-opacity-10 text-main"
              : "border-neutral-600 bg-transparent text-neutral-600"
          }`}
        >
          RIPEMD-160
        </button>
      </footer>
    </section>
  );
}
