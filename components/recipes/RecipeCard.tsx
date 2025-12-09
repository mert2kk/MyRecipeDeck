'use client'
import { toggleRecipeFavAction } from '@/app/actions/recipeActions'
import { IDeck } from '@/app/types/deck'
import { IRecipe } from '@/app/types/recipe'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import EmptyHeartIcon from '../Icons/EmptyHeartIcon'
import FilledHeartIcon from '../Icons/FilledHeartIcon'
import AddToDeckMenu from '../decks/AddToDeckMenu'

interface RecipeCardProps {
  recipe: IRecipe
  className?: string
  isFavoriteList?: Boolean
  decks?: IDeck[]
}

export default function RecipeCard({
  recipe,
  className = '',
  isFavoriteList = false,
  decks,
}: RecipeCardProps) {
  const router = useRouter()
  if (!recipe) {
    return null // veya <div className="skeleton...">Loading...</div>
  }
  const {
    name,
    category,
    image,
    preparationTime,
    servings,
    kcal,
    isFavorite,
    _id,
  } = recipe

  const handleFavRecipe = async () => await toggleRecipeFavAction(_id)

  return (
    <div
      className={`w-full bg-[#ffffff] h-auto min-h-[220px] flex flex-row rounded-3xl relative
       transition-all duration-300 ease-out focus-within:z-30
      hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:-translate-y-1 group ${className}`}
    >
      {/* Fav Effect*/}
      {isFavoriteList ? (
        <div className="absolute right-16 top-12 opacity-[0.07] text-brand-dark z-0 pointer-events-none group-hover:scale-400 transition-transform duration-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-36 h-36"
          >
            <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
          </svg>
        </div>
      ) : null}
      {/* Fav Button*/}
      <div className="absolute top-4 right-4 z-10">
        <button
          onClick={handleFavRecipe}
          className="flex items-center justify-center p-1 bg-white/50 hover:bg-white backdrop-blur-sm rounded-full transition-all shadow-sm text-gray-400 hover:text-[#fc4126] hover:scale-110 cursor-pointer"
        >
          {isFavorite ? <FilledHeartIcon /> : <EmptyHeartIcon />}
        </button>
      </div>

      {/* IMAGE */}
      <div className="w-[40%] relative p-3 flex items-center justify-center">
        <div className="relative w-full h-full min-h-[180px] rounded-2xl overflow-hidden shadow-sm">
          <Image
            src={image && image.length > 0 ? image : '/images/Pasta.jpg'}
            alt={name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-700"
            draggable="false"
            sizes="200"
            priority
          />
          <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-300"></div>
        </div>
      </div>

      {/* Content */}
      <div className="w-[60%] flex flex-col justify-center p-5 pr-6 pl-2">
        <div className="flex flex-col gap-1 mb-1">
          <h2 className="text-[#173B61] font-serif font-bold text-2xl leading-tight group-hover:text-[#fc4126] transition-colors duration-300 line-clamp-2">
            {name}
          </h2>
          <span className="text-[#fc4126] uppercase font-bold text-[10px] tracking-wide group-hover:text-[#173B61] ">
            {category}
          </span>
        </div>

        {/* Statics */}
        <div className="flex items-center gap-6 my-4 border-b border-dashed border-gray-100 pb-4">
          <div className="flex flex-col">
            <span className="text-[#173B61] font-bold text-lg leading-none">
              {preparationTime}
            </span>
            <span className="text-gray-400 text-[10px] font-medium uppercase mt-1">
              Mins
            </span>
          </div>
          <div className="w-px h-8 bg-gray-100"></div>
          <div className="flex flex-col">
            <span className="text-[#173B61] font-bold text-lg leading-none">
              {servings}
            </span>
            <span className="text-gray-400 text-[10px] font-medium uppercase mt-1">
              Serving
            </span>
          </div>
          <div className="w-px h-8 bg-gray-100"></div>
          <div className="flex flex-col">
            <span className="text-[#173B61] font-bold text-lg leading-none">
              {kcal}
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
            onClick={() => router.push(`/recipes/${recipe._id}`)}
          >
            View Recipe
          </button>
          {decks && <AddToDeckMenu decks={decks} recipeId={_id} />}
        </div>
      </div>
    </div>
  )
}
