import RecipeList from '@/app/components/recipes/RecipeList'

export default function page() {
  return (
    <div className="w-full max-w-7xl flex flex-col items-center gap-20 2xl:max-w-[1800px]">
      <h1 className="font-bold text-2xl text-gray-800"> My Recipes</h1>

      <RecipeList />
    </div>
  )
}
