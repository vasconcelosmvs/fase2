'use client'

import { HeaderPage } from "@/components/header-page";

import { FooterPage } from "@/components/footer-page";
import { FormEvent, useState } from "react";
import { toast } from "react-toastify";

export default function Descartavel() {

  function handleSubmit(ev: FormEvent) {
    ev.preventDefault()

    toast('Em rota de entrega!', {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "light",
      });
  }


  return (
    <main className="">
      <HeaderPage route="none" />

      <div className="flex flex-col items-center mt-10">
        <form onSubmit={handleSubmit} className="flex flex-col gap-8 bg-emerald-400 py-16 px-16 rounded-md">
          <h1 className="text-4xl font-bold text-center underline">Digite seu código:</h1>
          <div>
            <div className="flex items-center gap-2">
              <label className="font-bold">Código:</label>
              <input required type="text" placeholder="1AB2CC36" className="border border-black rounded-lg p-2 outline-none w-[300px]" />
            </div>

          </div>
          <button className="font-bold text-black p-2 bg-white rounded-md hover:bg-gray-200">
            VERIFICAR
          </button>

        </form>
      </div>

      <FooterPage />
    </main>
  );
}
