import RecipeDeck from './RecipeDeck'

export default function RecipeDecks() {
  return (
    <div className="w-full p-10 grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-20 justify-items-center ">
      <RecipeDeck />
      <RecipeDeck />
      <RecipeDeck />
      <RecipeDeck />
      <RecipeDeck />
      <RecipeDeck />
      <RecipeDeck />

      <RecipeDeck />
      <RecipeDeck />
      <RecipeDeck />
      <RecipeDeck />

      <RecipeDeck />
    </div>
  )
}
