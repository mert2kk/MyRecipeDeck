import RecipeCard from './RecipeCard'
export default function RecipeList() {
  return (
    <div className="flex flex-col p-10 w-screen flex-wrap">
      <div className="flex flex-row flex-wrap justify-center">
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
      </div>
    </div>
  )
}
