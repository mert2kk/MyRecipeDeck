import { authOptions } from '@/app/services/authService'
import { getAllRecipes } from '@/app/services/recipeService'
import RecipeList from '@/components/recipes/RecipeList'
import { getServerSession } from 'next-auth'
import Link from 'next/link'

export default async function page() {
  const session = await getServerSession(authOptions)

  if (!session?.user) {
    return
  }

  const recipes = await getAllRecipes(session?.user?.id)
  return (
    <div className="w-full max-w-7xl flex flex-col items-center gap-20 2xl:max-w-[1800px]">
      <h1 className="font-bold text-3xl text-gray-800  font-kalam">
        My Recipes
      </h1>
      {recipes.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-20 text-center">
          <div className="w-16 h-16 bg-orange-50 text-brand-orange rounded-full flex items-center justify-center mb-6 text-2xl">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.25 5.25C9.25 4.83579 9.58579 4.5 10 4.5H14C14.4142 4.5 14.75 4.83579 14.75 5.25C14.75 5.66421 14.4142 6 14 6L12.75 6V7.53169C17.2314 7.91212 20.75 11.6702 20.75 16.25V17H3.25V16.25C3.25 11.6702 6.7686 7.91212 11.25 7.53169V6L10 6C9.58579 6 9.25 5.66421 9.25 5.25Z"
                fill="#323544"
              />
              <path
                d="M21.25 18H2.75C2.33579 18 2 18.3358 2 18.75C2 19.1642 2.33579 19.5 2.75 19.5H21.25C21.6642 19.5 22 19.1642 22 18.75C22 18.3358 21.6642 18 21.25 18Z"
                fill="#323544"
              />
            </svg>
          </div>

          <h2 className="text-3xl font-kalam font-bold text-gray-800 mb-2">
            No recipes yet.
          </h2>

          <p className="text-gray-500 max-w-xs mx-auto mb-8 leading-relaxed">
            Start building your collection by adding your first recipe.
          </p>

          <Link
            href="/recipes/new"
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
            Create Recipe
          </Link>
        </div>
      ) : (
        <RecipeList recipes={recipes} />
      )}
    </div>
  )
}
