import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import { getServerSession } from 'next-auth'

import Deck from '@/lib/models/Deck'
import Recipe from '@/lib/models/Recipe'
import User from '@/lib/models/User'

export default async function ProfilePage() {
  //not using useSession as we want the page in server side
  const session = await getServerSession(authOptions)

  const user = await User.findOne({ email: session?.user?.email })
  const recipeCount = await Recipe.countDocuments({ user: user._id })
  const deckCount = await Deck.countDocuments({ user: user._id })

  return (
    <div className="flex flex-col gap-10 items-center w-full h-full">
      {/* PP */}
      <div className="relative">
        <div className="w-40 h-40 rounded-full border-4 border-white shadow-lg overflow-hidden bg-white">
          {user.image ? (
            <img
              src={user.image}
              alt={user.username?.charAt(0).toUpperCase()}
              className="w-full h-full object-cover pointer-events-none"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-brand-orange text-white text-6xl font-bold font-kalam">
              {user.username?.charAt(0).toUpperCase()}
            </div>
          )}
        </div>
        {user.isPremium && (
          <div className="absolute bottom-2 -right-4 bg-brand-orange text-white text-xs font-bold px-2 py-1 rounded-full border-2 border-white shadow-sm flex items-center gap-1">
            Premium
          </div>
        )}
      </div>
      {/* Text */}
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900">{user.username}</h1>
        <p className="text-gray-500 font-medium">{user.email}</p>

        <div className="mt-2 flex justify-center">
          {!user.isPremium ? (
            <span className="bg-gray-100 text-gray-700 px-4 py-1 rounded-full text-xs font-semibold">
              Free Plan
            </span>
          ) : (
            <span className="bg-gray-100 text-brand-orange px-4 py-1 rounded-full text-xs font-semibold">
              Pro Chef
            </span>
          )}
        </div>
      </div>
      {/* Statics */}
      <div className="gap-4 mb-8 flex bg-brand-dark/10 px-10 py-4 rounded-lg flex-col text-center">
        <h1 className="text-xl font-bold">Statics</h1>
        <div className="flex flex-row gap-4 text-center">
          <div>
            <p className="font-semibold text-sm">Recipes</p>
            {recipeCount}
          </div>
          <div>
            <p className="font-semibold text-sm">Decks</p>
            {deckCount}
          </div>

          <div>
            <p className="font-semibold text-sm">Favorites</p>
            {user.favorites?.length || 0}
          </div>
        </div>
      </div>
    </div>
  )
}
