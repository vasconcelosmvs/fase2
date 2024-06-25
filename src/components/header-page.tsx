import { BaggageClaim, Heart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import imageInsta from '../../public/insta.png';
import imageWhatsapp from '../../public/whats.webp';

type HeaderProps = {
  route: 'home' | 'promocoes' | 'descartaveis' | 'vaporizadores' | 'none'
}

export function HeaderPage({ route }: HeaderProps) {
  return <div className="bg-emerald-600 pt-2 sticky top-0 z-10">
    <div className="px-4 flex justify-end">
      <div className="flex gap-16 border-2 p-2 border-black w-fit text-black font-bold rounded-md">
        <Link href={'/rastreio'}>
          <span className="hover:underline">RASTREAR PEDIDO</span>
        </Link>
        <Link href={'/suporte'}>
          <span className="hover:underline">FALE CONOSCO</span>
        </Link>
      </div>
    </div>

    <div className="px-4 flex justify-between items-end">
      <Link href={'/'}>
        <div className="flex flex-col text-4xl">
          <span className="text-white font-bold">
            <span className="text-black">V</span>ape
          </span>
          <span className="ml-12 text-white font-bold">
            <span className="text-black">S</span>hop
          </span>
        </div> 
      </Link>

      <input type="text" placeholder="Pesquisa" className="w-[500px] h-[42px] p-2 outline-none rounded-md text-black" />

      <div className="flex gap-8 items-center">
        <div className="flex gap-4">
          <Heart size={32} />
          <Link href={'/carrinho'}>
            <BaggageClaim size={32} />
          </Link>
        </div>

        <div className="flex gap-2">
          <Link href={'/login'}>
            <span className="font-bold text-lg hover:text-gray-200">ENTRAR</span>
          </Link>
          <span className="font-bold text-lg">/</span>
          <Link href={'/cadastrar'}>
            <span className="font-bold text-lg hover:text-gray-200">CADASTRE-SE</span>
          </Link>
        </div>
      </div>
    </div>

    <div className="bg-emerald-300 mt-2 text-black flex px-32 items-center justify-between">
        <div className="flex gap-10">
          <Link href={'/'}>
            <span className={`${route === 'home' ? 'font-bold text-lg underline' : 'font-bold text-lg hover:underline'}`}>Inicio</span>
          </Link>
          <Link href='/promocoes'>
            <span className={`${route === 'promocoes' ? 'font-bold text-lg underline' : 'font-bold text-lg hover:underline'}`}>Promoções</span>
          </Link>
          <Link href={'/descartaveis'}>
            <span className={`${route === 'descartaveis' ? 'font-bold text-lg underline' : 'font-bold text-lg hover:underline'}`}>Descartaveis</span>
          </Link>
          <Link href={'/vaporizadores'}>
            <span className={`${route === 'vaporizadores' ? 'font-bold text-lg underline' : 'font-bold text-lg hover:underline'}`}>Vaporizadores</span>
          </Link>
        </div>

        <div className="flex items-center">
          <Image className="w-5 h-5" alt="" src={imageInsta} />
          <Image className="w-10 h-10" alt="" src={imageWhatsapp} />
        </div>
    </div>
  </div>
   
}