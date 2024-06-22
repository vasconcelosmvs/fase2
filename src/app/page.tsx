import { HeaderPage } from "@/components/header-page";
import Image from "next/image";
import Link from "next/link";

import imageInsta from '../../public/insta.png';
import imageWhatsapp from '../../public/whats.webp';
import imageVape from '../../public/vape.webp';
import imagePod from '../../public/vape-unic.webp';
import { ChevronLeft, ChevronRight, Heart } from "lucide-react";

export default function Home() {
  const pods = [
    {title: 'Pod Descartável Elf Bar', price: 'R$ 129,99', image: imagePod},
    {title: 'Pod Descartável Elf Bar', price: 'R$ 129,99', image: imagePod},
    {title: 'Pod Descartável Elf Bar', price: 'R$ 129,99', image: imagePod},
    {title: 'Pod Descartável Elf Bar', price: 'R$ 129,99', image: imagePod},
    {title: 'Pod Descartável Elf Bar', price: 'R$ 129,99', image: imagePod},
  ]

  return (
    <main className="">
      <HeaderPage />
      <div className="bg-emerald-300 text-black flex px-32 items-center justify-between">
        <div className="flex gap-10">
          <span className="font-bold text-lg underline cursor-pointer">Inicio</span>
          <Link href={''}>
            <span className="font-bold text-lg hover:underline">Promoções</span>
          </Link>
          <Link href={''}>
            <span className="font-bold text-lg hover:underline">Descartaveis</span>
          </Link>
          <Link href={''}>
            <span className="font-bold text-lg hover:underline">Vaporizadores</span>
          </Link>
        </div>

        <div className="flex items-center">
          <Image className="w-5 h-5" alt="" src={imageInsta} />
          <Image className="w-10 h-10" alt="" src={imageWhatsapp} />
        </div>
      </div>

      <div className="mt-10 bg-emerald-200 flex justify-between px-4 py-2">
        <Image className="h-80 w-80" src={imageVape} alt="" />
        <div className="flex flex-col text-center justify-center gap-2">
          <span className="text-4xl font-bold">PRÉ-LANÇAMENTO</span>
          <span className="underline text-6xl font-bold">Elf Bar BC 10000</span>
        </div>
        <Image className="h-80 w-80" src={imageVape} alt="" />
      </div>

      <div className="flex justify-between items-center px-6 mt-10">
        <ChevronLeft size={32} className="bg-slate-300 rounded-full cursor-pointer" />

        <div className="flex gap-4">

          {
            pods.map((pod, index) => (
              <div key={index} className="flex flex-col text-center border">
                <div className="relative">
                  <Image className="w-60 h-60" src={pod.image} alt="" />
                  <Heart className="absolute top-1 right-1" color="red" size={32} />
                </div>
                <span>{pod.title}</span>
                <span>{pod.price}</span>
              </div>
            ))
          }

        </div>

        <ChevronRight size={32} className="bg-slate-300 rounded-full cursor-pointer" />
      </div>
    </main>
  );
}
