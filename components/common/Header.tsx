'use client'
import { signOut, useSession } from 'next-auth/react' // 1. NextAuth hook'larını ekledik
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import HeaderMenu from './HeaderMenu'

export default function Header() {
  const router = useRouter()
  const { data: session, status } = useSession()
  const handleSignOut = async () => {
    if (!session) {
      router.push('/')
      return
    }
    await signOut({ callbackUrl: 'http://localhost:3000' })
  }
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
      {status === 'loading' ? (
        <span>Loading...</span>
      ) : session ? (
        <button
          onClick={handleSignOut}
          className="p-4 font-semibold text-sm text-brand-bg "
        >
          Sign Out
        </button>
      ) : (
        <div></div>
      )}
    </div>
  )
}
