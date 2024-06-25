'use client'

import { HeaderPage } from "@/components/header-page";
import Image from "next/image";

import imagePod from '../../../public/vape-unic.webp';
import imagePodSmok from '../../../public/smok-vape.webp';
import imagePodXros from '../../../public/xros-vape.webp';
import imagePodMixed from '../../../public/pod-mixed.webp';
import imagePodV50 from '../../../public/pod-v50.png';
import imageLiquidoPassion from '../../../public/liquido-passion-fruta.png';

import { formatNumber } from "@/utils/format-number";
import { FooterPage } from "@/components/footer-page";
import { CardSlidePromocao } from "@/components/card-slide-promocao";
import { FormEvent } from "react";
import { toast } from "react-toastify";

export default function Vaporizador() {
  const pods = [
    {title: 'Pod Descartável Elf Bar', price: 129.99, image: imagePod},
    {title: 'Smok Vape Pen V2', price: 115, image: imagePodSmok},
  ]

  const valorTotal = pods.reduce((acc, pod) => acc + pod.price, 0)

  function closeOrder(ev: FormEvent) {
    ev.preventDefault()

    toast('Compra realizada!', {
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
      <HeaderPage route="vaporizadores" />

      <div className="flex px-4 justify-center gap-12 mt-10">
        <div className="flex flex-col gap-4 justify-center  flex-wrap border w-[400px] border-black p-4 rounded-md">
          {
            pods.map((pod, index) => (
              <div key={index} className="flex bg-slate-200 rounded-md py-3 px-2">
                <Image className="w-36 h-36" src={pod.image} alt="" />

                <div className="flex flex-col">
                  <span className="text-lg">{pod.title}</span>
                  <span className="font-bold">{pod.price}</span>
                </div>
              </div>
            ))
          }
        </div>

        <div className="w-fit flex flex-col gap-4 justify-center flex-wrap border h-fit border-black p-4 rounded-md">
          {
            pods.map((pod, index) => (
              <div key={index} className="h-fit rounded-md py-3 px-2">
                <div className="flex items-center gap-4">
                  <span className="text-lg w-52">{pod.title}</span>
                  <span className="font-bold">{formatNumber(pod.price)}</span>
                </div>
              </div>
            ))
          }

          <hr className="border-black" />
          <div className="flex items-center gap-4 justify-between">
            <span className="text-lg w-52">Total</span>
            <span className="font-bold">{formatNumber(valorTotal)}</span>
          </div>

          <button onClick={closeOrder} className="bg-emerald-400 text-white font-bold py-2 px-4 rounded-md hover:bg-emerald-500">Finalizar Compra</button>
        </div>

      </div>

      <div className="flex justify-center">
        <div className="bg-emerald-200 mt-10 flex items-center py-4 justify-between w-[90%] px-4 rounded-md border-2 border-black">
          <Image alt="" className="h-32 w-32" src={require('../../../public/caminhao-de-entrega.png')} />
          <Image alt=""  className="w-[700px]" src={require('../../../public/rapida.png')} />
          <Image alt="" className="h-32 w-32" src={require('../../../public/caminhao-de-entrega.png')} />
        </div>
      </div>

      <FooterPage />
    </main>
  );
}
