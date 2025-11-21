'use client'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import CardsIcon from '../Icons/CardsIcon'
import DeckIcon from '../Icons/DeckIcon'
import EmptyHeartIcon from '../Icons/EmptyHeartIcon'

export default function RecipeCard() {
  const router = useRouter()

  return (
    <div
      className="w-full bg-[#ffffff] h-auto min-h-[220px] flex flex-row rounded-3xl relative overflow-hidden 
      shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-300
      transition-all duration-300 ease-out
      hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)]
      hover:-translate-y-1 group"
    >
      {/* Fav Button*/}
      <div className="absolute top-4 right-4 z-10">
        <button className="flex items-center justify-center p-1 bg-white/50 hover:bg-white backdrop-blur-sm rounded-full transition-all shadow-sm text-gray-400 hover:text-[#fc4126] hover:scale-110 cursor-pointer">
          <EmptyHeartIcon />
        </button>
      </div>

      {/* IMAGE */}
      <div className="w-[40%] relative p-3 flex items-center justify-center">
        <div className="relative w-full h-full min-h-[180px] rounded-2xl overflow-hidden shadow-sm">
          <Image
            src="/images/Pasta.jpg"
            alt="Recipe Photo"
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-700"
            draggable="false"
          />
          <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-300"></div>
        </div>
      </div>

      {/* Content */}
      <div className="w-[60%] flex flex-col justify-center p-5 pr-6 pl-2">
        <div className="flex flex-col gap-1 mb-1">
          <div className="flex items-center gap-2 text-gray-400 text-xs font-medium cursor-pointer">
            <span className="">
              <DeckIcon />
            </span>
            <span>Healthy Meals</span>
          </div>

          <h2 className="text-[#173B61] font-serif font-bold text-2xl leading-tight group-hover:text-[#fc4126] transition-colors duration-300">
            Pasta alla Vodka
          </h2>
          <span className="text-[#fc4126] uppercase font-bold text-[10px] tracking-wide group-hover:text-[#173B61] ">
            Main Dish
          </span>
        </div>

        {/* Statics */}
        <div className="flex items-center gap-6 my-4 border-b border-dashed border-gray-100 pb-4">
          <div className="flex flex-col">
            <span className="text-[#173B61] font-bold text-lg leading-none">
              50
            </span>
            <span className="text-gray-400 text-[10px] font-medium uppercase mt-1">
              Mins
            </span>
          </div>
          <div className="w-px h-8 bg-gray-100"></div>
          <div className="flex flex-col">
            <span className="text-[#173B61] font-bold text-lg leading-none">
              4
            </span>
            <span className="text-gray-400 text-[10px] font-medium uppercase mt-1">
              Serving
            </span>
          </div>
          <div className="w-px h-8 bg-gray-100"></div>
          <div className="flex flex-col">
            <span className="text-[#173B61] font-bold text-lg leading-none">
              450
            </span>
            <span className="text-gray-400 text-[10px] font-medium uppercase mt-1">
              Kcal
            </span>
          </div>
        </div>

        {/* buttons */}
        <div className="flex flex-row items-center justify-between gap-3 mt-auto">
          <button
            className="bg-[#fc4126] hover:bg-[#e03a20] text-[#FFEBD0] py-2.5 px-5 rounded-xl text-xs font-bold transition-all flex-1 shadow-md shadow-orange-100 active:scale-95 cursor-pointer"
            onClick={() => router.push('/recipes/123')}
          >
            View Recipe
          </button>

          <button className="flex items-center justify-center p-2.5 rounded-xl bg-gray-50 hover:bg-gray-100 text-black hover:text-[#173B61] transition-colors border border-transparent hover:border-gray-200 cursor-pointer">
            <CardsIcon />+
          </button>
        </div>
      </div>
    </div>
  )
}
