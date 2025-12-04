import { IRecipe } from '@/app/types/recipe'
import Image from 'next/image'
import EmptyHeartIcon from '../Icons/EmptyHeartIcon'
import KnifeForkIcon from '../Icons/KnifeForkIcon'
import BackButton from '../ui/BackButton'

interface RecipeProps {
  recipe: IRecipe
}
export default async function Recipe({ recipe }: { recipe: IRecipe }) {
  return (
    <div className=" bg-[#7697a000] flex flex-col rounded-lg p-4 xl:h-full xl:flex-row items-center relative  ">
      <div className="absolute left-2 top-2">
        <BackButton />
      </div>
      <button className="absolute top-0 right-0 m-4 cursor-pointer">
        {/* <FilledHeartIcon /> */}
        <EmptyHeartIcon />
      </button>
      {/* Left Side */}
      <div className="flex flex-col justify-center items-center w-2/5 ">
        {/* Image Part */}
        <div className="w-4/5 flex p-8 flex-col min-w-80 ">
          <h2 className="text-[#173B61] font-serif font-semibold text-center mb-2">
            {recipe.name}
          </h2>
          {!recipe.image ? (
            <Image
              src="/"
              alt="Recipe Photo"
              className=" w-auto object-cover rounded-xl p-2 "
              width={320}
              height={320}
              style={{ objectFit: 'contain' }}
              draggable="false"
            />
          ) : (
            <div className="w-full h-52 flex flex-col items-center justify-center bg-brand-orange p-4 rounded-xl text-center shadow-md">
              <span className="text-white font-kalam font-bold text-2xl drop-shadow-md">
                {recipe.name}
              </span>

              <div className="mt-2 text-white/80">
                <KnifeForkIcon />
              </div>
            </div>
          )}
        </div>
        <div className="w-4/5 flex flex-col p-2 justify-center items-center  space-y-6">
          <div className="flex flex-row  space-x-4 text-lg text-[#7697a0]">
            <p className="flex flex-col font-bold">
              {recipe.preparationTime}
              <span className="font-medium">Mins</span>
            </p>

            <div className="flex flex-row">
              <p className="flex flex-col font-bold">
                {recipe.servings}
                <span className="font-medium">Serving</span>
              </p>
            </div>
            <div className="flex flex-row">
              <p className="flex flex-col font-bold">
                {recipe.kcal}
                <span className="font-medium">Kcal</span>
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center">
            <p className="font-semibold text-gray-600 pb-4 ">
              {recipe.category}
            </p>
          </div>
        </div>
        {/*  Below Image */}
      </div>
      {/* Text Side */}
      <div className="w-3/5 p-8 h-full items-center flex gap-y-20 text-center overflow-auto flex-col xl:mr-6">
        <h1 className="font-bold text-4xl text-black ">{recipe.name}</h1>
        <div className=" text-black flex flex-col gap-12">
          <div className="gap-8 flex flex-col">
            <h2 className="font-bold text-3xl">Ingredients</h2>
            <ul className="text-xl text-start list-disc">
              <li>200 g pasta (penne or rigatoni works best)</li>
              <li> 2 tbsp olive oil</li>
              <li>2 cloves garlic, minced</li>
              <li>1 small onion, finely chopped</li>
              <li>200 g tomato sauce or crushed tomatoes</li>
            </ul>
          </div>
          <div className="gap-8 flex flex-col">
            <h2 className="font-bold text-3xl">Instructions</h2>
            <ol className="text-xl text-start list-decimal">
              <li>Cook the pasta</li>
              <li>Prepare the sauce</li>
              <li>Deglaze with vodka</li>
              <li>Add tomato sauce</li>
              <li>Make it creamy</li> <li>Cook the pasta</li>
              <li>Prepare the sauce</li>
              <li>Deglaze with vodka</li>
              <li>Add tomato sauce</li>
              <li>Make it creamy</li>
            </ol>
          </div>
          <div className="gap-8 flex flex-col">
            <h2 className="font-bold text-3xl">Tips</h2>
            <ul className="text-xl text-start list-disc">
              <li>Don’t worry — the alcohol cooks off; just flavor remains.</li>
              <li>
                Rigatoni or penne sticks to the sauce better than spaghetti.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
