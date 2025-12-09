import dbConnect from '@/lib/db'
import Deck from '@/lib/models/Deck'
import Recipe from '@/lib/models/Recipe'
import { IDeck } from '../types/deck'
import { IRecipe } from '../types/recipe'

export const getDecks = async (userId: string) => {
  await dbConnect()
  const rawDecks = await Deck.find({ user: userId })
    .sort({
      created: -1,
    })
    .lean()

  const decks = JSON.parse(JSON.stringify(rawDecks)) as IDeck[]
  return decks
}

export const getRecipesByDeck = async (id: string) => {
  await dbConnect()
  const deck = await Deck.findOne({ _id: id }).lean()

  const recipeIDs = deck.recipes

  const rawRecipes = await Recipe.find({ _id: { $in: recipeIDs } })
    .sort({ created: -1 })
    .lean()

  const recipes = JSON.parse(JSON.stringify(rawRecipes)) as IRecipe[]

  return { recipes, deck }
}

export const toggleRecipeInDeck = async (deckId: string, recipeId: string) => {
  await dbConnect()

  const exists = await Deck.countDocuments({
    _id: deckId,
    recipes: recipeId,
  })

  if (exists > 0) {
    await Deck.updateOne({ _id: deckId }, { $pull: { recipes: recipeId } })
  } else {
    await Deck.updateOne({ _id: deckId }, { $addToSet: { recipes: recipeId } })
  }
}
