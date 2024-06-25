'use client'

import { HeaderPage } from "@/components/header-page";
import Image from "next/image";

import imagePod from '../../../public/vape-unic.webp';
import imagePodSmok from '../../../public/smok-vape.webp';
import imagePodXros from '../../../public/xros-vape.webp';
import imagePodMixed from '../../../public/pod-mixed.webp';
import imagePodV50 from '../../../public/pod-v50.png';
import imageLiquidoPassion from '../../../public/liquido-passion-fruta.png';

import { ChevronLeft, ChevronRight, Heart } from "lucide-react";

import { useState } from "react";
import { formatNumber } from "@/utils/format-number";
import { FooterPage } from "@/components/footer-page";
import { CardSlidePromocao } from "@/components/card-slide-promocao";

export default function Promocoes() {
  const pods = [
    {title: 'Pod Descartável Elf Bar', price: 129.99, image: imagePod},
    {title: 'Líquido Passion Fruta', price: 450.5, image: imageLiquidoPassion},
    {title: 'Vaporesso Xros Mini Vape', price: 129, image: imagePodXros},
    {title: 'Vaporesso Sky Solo Plus', price: 129, image: imagePodMixed},
    {title: 'Smok Vape Pen V5', price: 129.99, image: imagePodXros},
    {title: 'Ignite V50 - Pod descartável', price: 300.00, image: imagePodV50},
  ]

  const [podsSelected, setPodsSelected] = useState(pods.slice(0, 3))

  function lastPods() {
    const nexts = pods.slice(0, 3)

    setPodsSelected(nexts)
  }

  function nextPods() {
    const nexts = pods.slice(3, pods.length)

    setPodsSelected(nexts)
  }

  return (
    <main className="">
      <HeaderPage route="promocoes" />

      <div className="flex justify-center">
        <p className="font-bold text-2xl text-center mt-4 bg-emerald-400 w-fit px-10 py-2">Promoções</p>
      </div>

      <div className="flex justify-between items-center px-6 mt-10">
        <button onClick={lastPods}>
          <ChevronLeft size={32} className="bg-slate-300 rounded-full cursor-pointer" />
        </button>

        <div className="flex gap-4">
          {
            podsSelected.map((pod, index) => (
              <CardSlidePromocao key={index} image={pod.image} price={formatNumber(pod.price)} title={pod.title} />
            ))
          }
        </div>

        <button onClick={nextPods}>
          <ChevronRight size={32} className="bg-slate-300 rounded-full cursor-pointer" />
        </button>
      </div>

      <div className="flex justify-center">
        <div className="bg-emerald-200 mt-10 flex items-center py-4 justify-between w-[90%] px-4 rounded-md border-2 border-black">
          <Image alt="" className="h-32 w-32" src={require('../../../public/sacola.png')} />
          <Image alt=""  className="w-[700px]" src={require('../../../public/primeira-compra.png')} />
          <Image alt="" className="h-32 w-32" src={require('../../../public/sacola.png')} />
        </div>
      </div>

      <FooterPage />
    </main>
  );
}
