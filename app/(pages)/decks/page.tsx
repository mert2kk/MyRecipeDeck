import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import { IDeck } from '@/app/types/deck'
import RecipeDecks from '@/components/decks/RecipeDecks'
import dbConnect from '@/lib/db'
import Deck from '@/lib/models/Deck'
import User from '@/lib/models/User'
import { getServerSession } from 'next-auth'
import Link from 'next/link'

export default async function Page() {
  const session = await getServerSession(authOptions)
  await dbConnect()

  const user = await User.findOne({ email: session?.user?.email })
  const rawDecks = await Deck.find({ user: session?.user.id })
    .sort({
      created: -1,
    })
    .lean()

  const decks = rawDecks.map((deck: any) => ({
    ...deck,
    _id: deck._id.toString(),
    recipes: deck.recipes.map((recipe: any) => ({
      _id: recipe.toString(),
    })),
    user: deck.user.toString(),
    createdAt: deck.createdAt?.toISOString(), // Date -> String
    updatedAt: deck.updatedAt?.toISOString(), // Date -> String
  })) as IDeck[]

  return (
    <div className="w-full max-w-7xl flex flex-col items-center gap-20 2xl:max-w-[1800px]">
      <h1 className="font-bold text-3xl text-gray-800 font-kalam ">
        My Recipe Decks
      </h1>
      {decks.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-20 text-center">
          {/* Ikon Alanı - Yatay Kart Destesi */}
          <div className="w-16 h-16 bg-orange-50 rounded-full flex items-center justify-center mb-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="#323544"
              className="w-10 h-10"
            >
              <path
                d="M20 4H8a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2z"
                opacity="0.4"
              />
              <path
                d="M18 8H6a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V10a2 2 0 00-2-2z"
                opacity="0.7"
              />
              {/* En öndeki ana yatay kart */}
              <path d="M16 12H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V14a2 2 0 00-2-2z" />
            </svg>
          </div>

          <h2 className="text-3xl font-kalam font-bold text-gray-800 mb-2">
            No decks created.
          </h2>

          <p className="text-gray-500 max-w-xs mx-auto mb-8 leading-relaxed">
            Organize your recipes into custom decks for any occasion.
          </p>

          <Link
            href="/decks/new"
            className="
      group relative
      inline-flex items-center gap-2
      px-8 py-3.5
      bg-brand-orange text-white
      rounded-full
      font-semibold text-sm tracking-wide
      shadow-lg shadow-brand-orange/30
      transition-all duration-300 ease-out
      hover:shadow-brand-orange/50 hover:-translate-y-1 hover:bg-orange-600
      active:scale-95
    "
          >
            Create New Deck
          </Link>
        </div>
      ) : (
        <RecipeDecks decks={decks} />
      )}
    </div>
  )
}
