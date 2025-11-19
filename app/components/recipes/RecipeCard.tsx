'use client'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import CardsIcon from '../Icons/CardsIcon'
import DeckIcon from '../Icons/DeckIcon'
import EmptyHeartIcon from '../Icons/EmptyHeartIcon'

export default function recipeCard() {
  const router = useRouter()
  return (
    <div
      className="w-full bg-[#f4f0e5] h-[250px] flex flex-row rounded-lg relative
    shadow-[0_10px_25px_rgba(0,0,0,0.15),0_20px_50px_rgba(0,0,0,0.1)]
         transition-all duration-300 ease-in-out
         hover:shadow-[0_15px_40px_rgba(0,0,0,0.2),0_25px_60px_rgba(0,0,0,0.12)]
         hover:-translate-y-1
         hover:scale-101
         hover:backdrop-brightness-102
    "
    >
      <button className="flex cursor-pointer absolute top-0 right-0 m-2">
        {/* <FilledHeartIcon /> */}
        <EmptyHeartIcon />
      </button>
      <h1 className="text-gray-500 font-bold text-xs flex flex-row gap-2 items-center cursor-pointer absolute top-0 left-0 m-2">
        <span>
          <DeckIcon />
        </span>
        Healthy Meals
      </h1>
      <div className="w-2/5 flex items-center m-4 mt-8 ">
        <Image
          src="/images/Pasta.jpg"
          alt="Recipe Photo"
          className="max-w-40 w-auto h-auto object-fill rounded-xl p-2"
          width={160}
          height={160}
          style={{ objectFit: 'fill' }}
          draggable="false"
        />
      </div>
      <div className="w-3/5 flex flex-col  justify-center m-4 mt-8">
        <div>
          <h2 className="text-[#173B61] font-serif font-semibold">
            Pasta alla Vodka
          </h2>
        </div>

        <div className="flex flex-row  space-x-4 mt-2 mb-2 text-sm text-[#7697a0]">
          <p className="flex flex-col font-bold">
            50<span className="text-xs font-medium">Mins</span>
          </p>

          <div className="flex flex-row">
            <p className="flex flex-col font-bold">
              4<span className="text-xs font-medium">Serving</span>
            </p>
          </div>
          <div className="flex flex-row">
            <p className="flex flex-col font-bold">
              450<span className="text-xs font-medium">Kcal</span>
            </p>
          </div>
        </div>
        <p className="text-xs font-semibold text-gray-600">Main Dish</p>
        <div className="flex flex-col mt-4 gap-4 items-center ">
          <button
            className="bg-[#fc4126] text-[#FFEBD0]  py-2 rounded-2xl text-[12px] font-semibold cursor-pointer w-[150px] "
            onClick={() => router.push('/recipes/123')}
          >
            View Recipe
          </button>
          <button className="bg-[#f4f0e5] text-gray-500 font-semibold text-[12px]  flex flex-row items-center justify-center space-x-2 cursor-pointer ">
            <CardsIcon />
            <p>Add to a Deck</p>
          </button>
        </div>
      </div>
    </div>
  )
}
