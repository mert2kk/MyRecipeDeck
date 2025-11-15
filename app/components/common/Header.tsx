import Image from 'next/image'

export default function Header() {
  return (
    <div className="flex justify-between items-center p-4 bg-[#242d4c] flex-row w-screen h-28">
      <Image
        src="/images/myRecipeDeck.png"
        width={100}
        height={100}
        alt="logo"
        className="ml-10 p-2"
      />
      <div>
        <button className="p-4 font-semibold text-sm ">My Recipes</button>
        <button className="p-4 font-semibold text-sm ">Collections</button>
        <button className="p-4 font-semibold text-sm ">Add Recipe</button>

        <button className="p-4 font-semibold text-sm ">
          Track Macros & Calories
        </button>
        <button className="p-4 font-semibold text-sm ">Settings</button>
      </div>
      <button className="p-4 font-semibold text-sm ">Sign Out</button>
    </div>
  )
}
