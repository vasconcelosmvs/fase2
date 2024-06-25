'use client'

import { HeaderPage } from "@/components/header-page";
import { FooterPage } from "@/components/footer-page";

export default function Descartavel() {


  return (
    <main className="">
      <HeaderPage route="descartaveis" />

      <div className="flex justify-center mt-10">
        <div className="w-[90%]">
          <h1 className="text-4xl font-bold">Fale conosco:</h1>
          <div className="mt-10 flex flex-col gap-8 bg-emerald-400 py-16 px-16 rounded-md ">
            <h1 className="text-4xl font-bold text-center underline">Nosso contado e-mail:</h1>
            <h1 className="text-5xl font-bold text-center">vapeshop@gmail.com</h1>
          </div>
        </div>
      </div>

      <FooterPage />
    </main>
  );
}
