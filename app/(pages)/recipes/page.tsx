import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import RecipeList from '@/components/recipes/RecipeList'
import dbConnect from '@/lib/db'
import Recipe from '@/lib/models/Recipe'
import User from '@/lib/models/User'
import { getServerSession } from 'next-auth'
import { IRecipe } from './types'

export default async function page() {
  const session = await getServerSession(authOptions)

  await dbConnect()

  const user = await User.findOne({ email: session?.user?.email })
  const rawRecipes = await Recipe.find({ user: user._id })
    .sort({ createdAt: -1 })
    .lean()

  //Clear data

  const recipes = rawRecipes.map((recipe: any) => ({
    ...recipe,
    _id: recipe._id.toString(), // ObjectId -> String
    user: recipe.user.toString(), // ObjectId -> String
    createdAt: recipe.createdAt?.toISOString(), // Date -> String
    updatedAt: recipe.updatedAt?.toISOString(), // Date -> String
    ingredients:
      recipe.ingredients?.map((ing: any) => ({
        ...ing,
        _id: ing._id ? ing._id.toString() : undefined, // Eğer subdoc ID varsa
      })) || [],
  })) as IRecipe[]

  const recipeCount = await Recipe.countDocuments({ user: user._id })

  return (
    <div className="w-full max-w-7xl flex flex-col items-center gap-20 2xl:max-w-[1800px]">
      <h1 className="font-bold text-3xl text-gray-800  font-kalam">
        My Recipes
      </h1>
      {}
      <RecipeList recipes={recipes} />
    </div>
  )
}
