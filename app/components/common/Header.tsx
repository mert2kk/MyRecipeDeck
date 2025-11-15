import Image from 'next/image'
import HeaderMenu from './HeaderMenu'

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
        <HeaderMenu />
      </div>
      <button className="p-4 font-semibold text-sm ">Sign Out</button>
    </div>
  )
}
