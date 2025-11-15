import Image from 'next/image'
import AddFolderIcon from '../Icons/AddFolderIcon'
import EmptyHeartIcon from '../Icons/EmptyHeartIcon'
import FilledHeartIcon from '../Icons/FilledHeartIcon'
import FolderIcon from '../Icons/FolderIcon'

export default function Recipe() {
  return (
    <div className=" bg-[#f4f0e5] flex flex-row rounded-lg w-full h-full  ">
      {/* Left Side */}
      <div className="flex flex-col h-auto justify-center items-center w-2/5">
        {/* Image Part */}
        <div className="w-4/5 flex p-8 flex-col h-auto ">
          <div className="flex flex-col">
            <button className="absolute place-self-end cursor-pointer">
              <FilledHeartIcon />
              <EmptyHeartIcon />
            </button>
            <h1 className="text-gray-500 uppercase text-xs flex flex-row gap-2 items-center cursor-pointer">
              <span>
                <FolderIcon />
              </span>
              Healthy Meals
            </h1>
            <h2 className="text-[#173B61] font-serif font-semibold">
              Pasta Vodka
            </h2>
          </div>
          <Image
            src="/images/Pasta.jpg"
            alt="Recipe Photo"
            className=" w-auto object-cover rounded-xl p-2"
            width={320}
            height={320}
            style={{ objectFit: 'contain' }}
          />
        </div>
        {/*  Below Image */}

        <div className="w-4/5 flex flex-col p-2 justify-center items-center  space-y-6">
          <div className="flex flex-row  space-x-4 text-lg text-[#7697a0]">
            <p className="flex flex-col font-bold">
              50<span className="font-medium">Mins</span>
            </p>

            <div className="flex flex-row">
              <p className="flex flex-col font-bold">
                4<span className="font-medium">Serving</span>
              </p>
            </div>
            <div className="flex flex-row">
              <p className="flex flex-col font-bold">
                450<span className="font-medium">Kcal</span>
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center">
            <p className="font-semibold text-gray-600 pb-4 ">Main Dish</p>

            <button className="bg-[#f4f0e5] text-gray-500 font-semibold text-[12px] flex flex-row items-center justify-center pb-2 space-x-2 cursor-pointer">
              <AddFolderIcon />
              <p>Add to Collection</p>
            </button>
          </div>
        </div>
      </div>
      {/* Text Side */}
      <div className="w-3/5 p-8 h-auto items-center flex justify-center text-center">
        <div className=" text-black flex flex-col space-y-8">
          <h1 className="font-bold text-xl">Pasta alla Vodka</h1>
          <div className="">
            <h2 className="font-bold">Ingredients</h2>
            <ol>
              <li>200 g pasta (penne or rigatoni works best)</li>
              <li> 2 tbsp olive oil</li>
              <li>2 cloves garlic, minced</li>
              <li>1 small onion, finely chopped</li>
              <li>200 g tomato sauce or crushed tomatoes</li>
            </ol>
          </div>
          <div>
            <h2 className="font-bold">Instructions</h2>
            <ol>
              <li>Cook the pasta</li>
              <li>Prepare the sauce</li>
              <li>Deglaze with vodka</li>
              <li>Add tomato sauce</li>
              <li>Make it creamy</li>
            </ol>
          </div>
          <div>
            <h2 className="font-bold">Tips</h2>
            <ol>
              <li>Don’t worry — the alcohol cooks off; just flavor remains.</li>
              <li>
                Rigatoni or penne sticks to the sauce better than spaghetti.
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  )
}
