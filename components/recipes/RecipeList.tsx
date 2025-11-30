import { IRecipe } from '@/app/(pages)/recipes/types'
import RecipeCard from './RecipeCard'

interface RecipeListProps {
  recipes?: IRecipe[]
  isFavoriteList?: Boolean | undefined
}
export default function RecipeList({
  isFavoriteList,
  recipes,
}: RecipeListProps) {
  return (
    <div className="w-full grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6  ">
      {recipes?.map((recipe) => (
        <RecipeCard
          key={recipe._id}
          recipe={recipe}
          isFavoriteList={isFavoriteList}
        />
      ))}
    </div>
  )
}
