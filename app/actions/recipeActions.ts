'use server'
import { makeRecipeFav } from '@/app/services/recipeService'
import { revalidatePath } from 'next/cache'

export async function toggleFavAction(id: string) {
  try {
    const newStatus = await makeRecipeFav(id)
    revalidatePath('/recipes')
    return { success: true, isFavorite: newStatus }
  } catch (e) {
    return { success: false }
  }
}
