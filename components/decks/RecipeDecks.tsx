import { IDeck } from '@/app/types/deck'
import RecipeDeck from './RecipeDeck'

interface RecipeDecksProps {
  decks: IDeck[]
}
export default function RecipeDecks({ decks }: RecipeDecksProps) {
  return (
    <div className="w-full p-10 grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-20 justify-items-center ">
      {decks.map((deck) => (
        <RecipeDeck key={deck._id} deck={deck} />
      ))}
    </div>
  )
}
