'use client'

import { useRouter } from 'next/navigation'

export default function HeaderMenu() {
  const router = useRouter()

  return (
    <div className="">
      <button
        className="p-4 font-semibold text-sm cursor-pointer "
        onClick={() => router.push('/recipes')}
      >
        My Recipes
      </button>
      <button
        className="p-4 font-semibold text-sm cursor-pointer "
        onClick={() => router.push('/decks')}
      >
        My Recipe Decks
      </button>
      <button
        className="p-4 font-semibold text-sm cursor-pointer "
        onClick={() => router.push('/favorites')}
      >
        Favorites
      </button>
      <button
        className="p-4 font-semibold text-sm cursor-pointer "
        onClick={() => router.push('/recipes/new')}
      >
        Add Recipe
      </button>
      <button
        className="p-4 font-semibold text-sm cursor-pointer "
        onClick={() => router.push('/tracks')}
      >
        Track Macros & Calories
      </button>
      <button
        className="p-4 font-semibold text-sm cursor-pointer "
        onClick={() => router.push('/settings')}
      >
        Settings
      </button>
    </div>
  )
}
