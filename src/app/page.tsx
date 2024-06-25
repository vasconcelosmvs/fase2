'use client'

import { HeaderPage } from "@/components/header-page";
import Image from "next/image";

import imageVape from '../../public/vape.webp';
import imagePod from '../../public/vape-unic.webp';
import imagePodSmok from '../../public/smok-vape.webp';
import imagePodXros from '../../public/xros-vape.webp';
import imagePodV50 from '../../public/pod-v50.png';
import imagePodMixed from '../../public/pod-mixed.webp';

import { ChevronLeft, ChevronRight, Heart } from "lucide-react";

import { useState } from "react";
import { formatNumber } from "@/utils/format-number";
import { FooterPage } from "@/components/footer-page";
import { CardSlidePromocao } from "@/components/card-slide-promocao";

export default function Home() {
  const pods = [
    {id: 1, title: 'Pod Descartável Elf Bar', price: 129.99, image: imagePod},
    {id: 2, title: 'Smok Vape Pen V2', price: 115, image: imagePodSmok},
    {id: 3, title: 'Vaporesso Xros Mini Vape', price: 129, image: imagePodXros},
    {id: 4, title: 'Vaporesso Sky Solo Plus', price: 129, image: imagePodMixed},
    {id: 5, title: 'Smok Vape Pen V5', price: 129.99, image: imagePodXros},
    {id: 6, title: 'Ignite V50 - Pod descartável', price: 300.00, image: imagePodV50},
    {id: 7, title: 'Vaporesso Sky Solo Plus', price: 129, image: imagePodMixed},
    {id: 8, title: 'Smok Vape Pen V5', price: 129.99, image: imagePodXros},
    {id: 9, title: 'Ignite V50 - Pod descartável', price: 300.00, image: imagePodV50},
    {id: 10, title: 'Vaporesso Sky Solo Plus', price: 129, image: imagePodMixed},
  ]

  const [podsSelected, setPodsSelected] = useState(pods.slice(0, 5))

  function lastPods() {
    const nexts = pods.slice(0, 5)

    setPodsSelected(nexts)
  }

  function nextPods() {
    const nexts = pods.slice(5, pods.length)

    setPodsSelected(nexts)
  }

  return (
    <main className="">
      <HeaderPage route="home"/>

      <div className="mt-10 bg-emerald-200 flex justify-between px-4 py-2">
        <Image className="h-80 w-80" src={imageVape} alt="" />
        <div className="flex flex-col text-center justify-center gap-2">
          <span className="text-4xl font-bold">PRÉ-LANÇAMENTO</span>
          <span className="underline text-6xl font-bold">Elf Bar BC 10000</span>
        </div>
        <Image className="h-80 w-80" src={imageVape} alt="" />
      </div>

      <div className="flex justify-between items-center px-6 mt-10">
        <button onClick={lastPods}>
          <ChevronLeft size={32} className="bg-slate-300 rounded-full cursor-pointer" />
        </button>

        <div className="flex gap-4">
          {
            podsSelected.map((pod) => (
              <CardSlidePromocao key={pod.id} image={pod.image} price={formatNumber(pod.price)} title={pod.title} />
            ))
          }
        </div>

        <button onClick={nextPods}>
          <ChevronRight size={32} className="bg-slate-300 rounded-full cursor-pointer" />
        </button>
      </div>

      <FooterPage />
    </main>
  );
}
