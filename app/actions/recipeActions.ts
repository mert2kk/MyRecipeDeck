'use server'
import { toggleRecipeFav } from '@/app/services/recipeService'
import { revalidatePath } from 'next/cache'
import { toggleRecipeInDeck } from '../services/deckService'

export async function toggleRecipeFavAction(id: string) {
  try {
    await toggleRecipeFav(id)
    revalidatePath('/recipes')
    return { success: true }
  } catch (e) {
    return { success: false }
  }
}

export async function toggleRecipeInDeckAction(
  deckId: string,
  recipeId: string,
) {
  try {
    await toggleRecipeInDeck(deckId, recipeId)
    revalidatePath('/recipes')
    return { success: true }
  } catch (e) {
    return { success: false }
  }
}
