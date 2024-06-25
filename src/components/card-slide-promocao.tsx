import Image from "next/image";
import { useState } from "react";
import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from 'react-icons/fa6'

interface CardSlideHomeProps {
  image: any;
  title: string;
  price: string;
}

export function CardSlidePromocao(pod: CardSlideHomeProps) {
  const [favorite, setFavorite] = useState(false)

  function handleFavorite() {
    setFavorite(!favorite)
  }

  return <div className="flex flex-col text-center bg-slate-200 rounded-md py-3 px-2">
    <div className="relative">
      <Image className="w-60 h-60" src={pod.image} alt="" />
      {
        favorite ?
          <button className="absolute top-1 right-1"  onClick={handleFavorite}>
            <FaHeart   color="red" size={32} />
          </button> 
          : <button className="absolute top-1 right-1" onClick={handleFavorite}>
              <FaRegHeart color="red" size={32} />
            </button>
      }
    </div>
    <span>{pod.title}</span>
    <span className="font-bold">{pod.price}</span>
  </div>
}