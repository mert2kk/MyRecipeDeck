import { authOptions } from '@/app/services/authService'
import { getRecipesByDeck } from '@/app/services/deckService'
import RecipeList from '@/components/recipes/RecipeList'
import BackButton from '@/components/ui/BackButton'
import dbConnect from '@/lib/db'
import User from '@/lib/models/User'
import { getServerSession } from 'next-auth'

interface PageProps {
  params: Promise<{ id: string }>
}

export default async function page({ params }: PageProps) {
  const { id } = await params
  const session = await getServerSession(authOptions)
  await dbConnect()

  const user = await User.findOne({ email: session?.user.email })
  const { recipes, deck } = await getRecipesByDeck(id)

  if (!deck) {
    return <div>Deck not found!</div>
  }

  return (
    <div className="w-full max-w-7xl flex flex-col items-center gap-20 2xl:max-w-[1800px] ">
      <div className="absolute right-10 top-10">
        <BackButton />
      </div>
      <h1 className="font-bold text-3xl text-gray-800  font-kalam">
        {deck.name}
      </h1>
      <RecipeList recipes={recipes} />
    </div>
  )
}
