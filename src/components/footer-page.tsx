import Image from "next/image";

import imageTransport from '../../public/caminhao-de-entrega.png';
import imagePagamento from '../../public/pagamento.png';
import imagePix from '../../public/pix.png';
import imageSacola from '../../public/sacola.png';

export function FooterPage() {
  return <div className="mt-10 bg-black flex flex-col items-center py-10">
  <div className="flex w-full justify-evenly items-center text-white">
    <div className="flex gap-4">
      <Image className="h-10 w-10" src={imageTransport} alt="" />
      <div className="flex flex-col">
        <span className="font-bold">FRETE GRÁTIS</span>
        <span className="font-bold">Acima de R$ 200</span>
      </div>
    </div>
    <div className="flex gap-4">
      <Image className="h-10 w-10" src={imagePagamento} alt="" />
      <div className="flex flex-col">
        <span className="font-bold">PARCELAMENTO</span>
        <span className="font-bold">Em até 3x sem juros</span>
      </div>
    </div>
    <div className="flex gap-4">
      <Image className="h-10 w-10" src={imagePix} alt="" />
      <div className="flex flex-col">
        <span className="font-bold">PIX</span>
        <span className="font-bold">10% de desconto</span>
      </div>
    </div>
    <div className="flex gap-4">
      <Image className="h-10 w-10" src={imageSacola} alt="" />
      <div className="flex flex-col">
        <span className="font-bold">COMPRA SEGURA</span>
        <span className="font-bold">Loja 100% seguro</span>
      </div>
    </div>
  </div>

  <span className="mt-10 text-white font-bold text-center">Vape Shop - Cigarros Eletrônicos | Campina Grande/PB - 2024 - Todos Direitos Reservados</span>
</div>
   
}