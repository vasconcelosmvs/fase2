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

export default function Vaporizador() {
  const pods = [
    {title: 'Pod Descartável Elf Bar', price: 129.99, image: imagePod},
    {title: 'Smok Vape Pen V2', price: 115, image: imagePodSmok},
    {title: 'Vaporesso Xros Mini Vape', price: 129, image: imagePodXros},
    {title: 'Vaporesso Sky Solo Plus', price: 129, image: imagePodMixed},
    {title: 'Smok Vape Pen V5', price: 129.99, image: imagePodXros},
    {title: 'Ignite V50 - Pod descartável', price: 300.00, image: imagePodV50},
    {title: 'Vaporesso Sky Solo Plus', price: 129, image: imagePodMixed},
    {title: 'Smok Vape Pen V5', price: 129.99, image: imagePodXros},
    {title: 'Ignite V50 - Pod descartável', price: 300.00, image: imagePodV50},
    {title: 'Líquido Passion Fruta', price: 450.5, image: imageLiquidoPassion},
  ]

  return (
    <main className="">
      <HeaderPage route="vaporizadores" />

      <div className="flex justify-center">
        <p className="font-bold text-2xl text-center mt-4 bg-emerald-400 w-fit px-10 py-2">Vaporizadores</p>
      </div>

      <div className="flex  items-center px-6 mt-10">
        <div className="flex gap-4 justify-center flex-wrap">
          {
            pods.map((pod, index) => (
              <CardSlidePromocao key={index} image={pod.image} price={formatNumber(pod.price)} title={pod.title} />
            ))
          }
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
