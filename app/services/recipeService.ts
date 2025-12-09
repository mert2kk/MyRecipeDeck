import dbConnect from '@/lib/db'
import Recipe from '@/lib/models/Recipe'
import { IRecipe } from '../types/recipe'

export const getAllRecipes = async (userId: string) => {
  await dbConnect()

  const rawRecipes = await Recipe.find({ user: userId })
    .sort({ createdAt: -1 })
    .lean()

  const recipes = JSON.parse(JSON.stringify(rawRecipes)) as IRecipe[]

  return recipes
}

export const getRecipe = async (id: string) => {
  await dbConnect()

  const rawRecipe = await Recipe.findOne({ _id: id }).lean()
  const recipe = JSON.parse(JSON.stringify(rawRecipe)) as IRecipe

  return recipe
}

export const getFavRecipes = async (userId: string) => {
  await dbConnect()
  const RawFavRecipes = await Recipe.find({
    user: userId,
    isFavorite: true,
  })
    .sort({ createdAt: -1 })
    .lean()

  const favRecipes = JSON.parse(JSON.stringify(RawFavRecipes))
  return favRecipes
}

export const toggleRecipeFav = async (recipeId: string) => {
  await dbConnect()
  const recipe = await Recipe.findById(recipeId)

  recipe.isFavorite = !recipe.isFavorite
  await recipe.save()
}
