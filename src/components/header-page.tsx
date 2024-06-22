import { BaggageClaim, Heart } from "lucide-react";
import Link from "next/link";

export function HeaderPage() {
  return <div className="bg-emerald-600 px-2 py-2">
    <div className="flex justify-end">
      <div className="flex gap-16 border-2 p-2 border-black w-fit text-black font-bold rounded-md">
        <span>RASTREAR PEDIDO</span>
        <span>FALE CONOSCO</span>
      </div>
    </div>

    <div className="flex justify-between items-end">
      <div className="flex flex-col text-4xl">
        <span className="text-white font-bold">
          <span className="text-black">V</span>ape
        </span>
        <span className="ml-12 text-white font-bold">
          <span className="text-black">S</span>hop
        </span>
      </div>

      <input type="text" placeholder="Pesquisa" className="w-[500px] h-[42px] p-2 outline-none rounded-md text-black" />

      <div className="flex gap-8 items-center">
        <div className="flex gap-4">
          <Heart size={32} />
          <BaggageClaim size={32} />
        </div>

        <div className="flex gap-2">
          <Link href={''}>
            <span className="font-bold text-lg hover:text-gray-200">ENTRAR</span>
          </Link>
          <span className="font-bold text-lg">/</span>
          <Link href={''}>
            <span className="font-bold text-lg hover:text-gray-200">CADASTRE-SE</span>
          </Link>
        </div>
      </div>
    </div>
  </div>
   
}