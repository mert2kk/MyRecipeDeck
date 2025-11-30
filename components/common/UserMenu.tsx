'use client'
import { signOut, useSession } from 'next-auth/react'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'

export default function UserMenu() {
  const { data: session } = useSession()
  const [isOpen, setIsOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!isOpen) return
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [isOpen])

  if (!session?.user) return null

  return (
    <div className="relative" ref={menuRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 focus:outline-none transition-opacity hover:opacity-80"
      >
        {session.user.image ? (
          <img
            src={session.user.image}
            alt={session.user.name?.charAt(0).toUpperCase() || 'User'}
            className="w-10 h-10 rounded-full border-2 border-white shadow-sm object-cover pointer-events-none"
          />
        ) : (
          <div className="w-10 h-10 rounded-full bg-brand-orange text-white flex items-center justify-center font-bold text-lg">
            {session.user.name?.charAt(0).toUpperCase()}
          </div>
        )}
      </button>

      {/* --- DROPDOWN  --- */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-xl pt-2 z-50 animate-in duration-300 fade-in-75 slide-in-from-top-2">
          <div className="px-4 py-2 border-b border-brand-dark/10 mb-">
            <p className="text-sm font-semibold text-brand-dark truncate">
              {session.user.name}
            </p>
            <p className="text-xs text-brand-dark/80 truncate">
              {session.user.email}
            </p>
          </div>

          <Link
            href="/profile"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-brand-dark/10 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Profile
          </Link>

          <Link
            href="/settings"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-brand-dark/10 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Settings
          </Link>

          <button
            onClick={() => signOut({ callbackUrl: '/' })}
            className="w-full text-right block px-4 py-2 text-sm text-brand-orange hover:bg-brand-orange hover:text-white rounded-b-xl transition-colors font-medium cursor-pointer"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  )
}
