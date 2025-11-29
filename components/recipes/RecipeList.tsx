import RecipeCard from './RecipeCard'
interface RecipeListProps {
  isFavorite?: Boolean | undefined
}
export default function RecipeList({ isFavorite }: RecipeListProps) {
  return (
    <div className="w-full grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6  ">
      <RecipeCard isFavorite={isFavorite} />
      <RecipeCard isFavorite={isFavorite} />
      <RecipeCard isFavorite={isFavorite} />
      <RecipeCard isFavorite={isFavorite} />
      <RecipeCard isFavorite={isFavorite} />
      <RecipeCard isFavorite={isFavorite} />
      <RecipeCard isFavorite={isFavorite} />
      <RecipeCard isFavorite={isFavorite} />
    </div>
  )
}
