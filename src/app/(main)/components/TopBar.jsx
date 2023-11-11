"use client";

import Image from "next/image";
import Link from "next/link";

export default function TopBar() {
  return (
    <div className="absolute z-9 pl-[19rem] w-full h-14 ml-1/6 bg-white flex justify-between items-center">
      <form name="form-busca h-full" method="post" action="">
        <img className="absolute ml-6 mt-1 w-4" src="/icone-lupa.png" />
        <input
          className="rounded-xl w-80 bg-white outline outline-slate-100 ml-4 ps-8"
          id="busca"
          name="busca"
          type="text"
          placeholder="Explorar..."
        />
      </form>
      <div className="flex justify-around items-center">
        <div className="bg-slate-400 w-8 h-8 rounded-full flex justify-around items-center mr-10">
          <Image width={18} height={18} src="/icone-msg.png" />
        </div>
        <div className="text-right">
          <p className="text-sm">
            <Link href="/login">Usuário</Link>
          </p>
          <p className="text-xs">Cargo</p>
        </div>
        <div className="bg-slate-400 w-8 h-8 rounded-full flex justify-around items-center mr-10 ml-2">
          <Image width={18} height={18} src="/icone-usuario.png" />
        </div>
      </div>
    </div>
  );
}
