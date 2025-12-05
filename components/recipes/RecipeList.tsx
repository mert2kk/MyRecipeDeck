import { IDeck } from '@/app/types/deck'
import { IRecipe } from '@/app/types/recipe'
import RecipeCard from './RecipeCard'

interface RecipeListProps {
  recipes?: IRecipe[]
  isFavoriteList?: Boolean | undefined
  decks?: IDeck[]
}
export default function RecipeList({
  isFavoriteList,
  recipes,
  decks,
}: RecipeListProps) {
  return (
    <div className="w-full grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6  ">
      {recipes?.map((recipe) => (
        <RecipeCard
          key={recipe._id}
          recipe={recipe}
          isFavoriteList={isFavoriteList}
          decks={decks}
        />
      ))}
    </div>
  )
}
