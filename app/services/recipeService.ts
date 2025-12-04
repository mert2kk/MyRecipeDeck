import dbConnect from '@/lib/db'
import Recipe from '@/lib/models/Recipe'
import { IRecipe } from '../types/recipe'

export const getAllRecipes = async (userId: string) => {
  await dbConnect()

  const rawRecipes = await Recipe.find({ user: userId })
    .sort({ createdAt: -1 })
    .lean()

  //Clear data

  const recipes = JSON.parse(JSON.stringify(rawRecipes)) as IRecipe[]

  return recipes
}

export const getRecipe = async (id: string) => {
  await dbConnect()

  const rawRecipe = await Recipe.findOne({ _id: id }).lean()
  const recipe = JSON.parse(JSON.stringify(rawRecipe)) as IRecipe

  return recipe
}
