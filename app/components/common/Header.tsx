'use client'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import HeaderMenu from './HeaderMenu'

export default function Header() {
  const router = useRouter()
  return (
    <div className="flex justify-between items-center p-4 bg-[#242d4c] flex-col lg:flex-row w-full h-auto lg:h-28 text-center">
      <Image
        src="/images/myRecipeDeck.png"
        width={100}
        height={100}
        alt="logo"
        className="ml-10 p-2"
        onClick={() => router.push('/recipes')}
      />
      <div className="flex flex-col lg:flex-wrap">
        <HeaderMenu />
      </div>
      <button className="p-4 font-semibold text-sm ">Sign Out</button>
    </div>
  )
}
