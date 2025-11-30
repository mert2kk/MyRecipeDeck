import { IRecipe } from './recipe'

export interface IDeck {
  _id: string
  name: string
  description?: string
  recipes: IRecipe[]
  user: string // User ID'si
  coverImage: string
  createdAt: string
  updatedAt: string
}

export interface CreateDeckInput {
  name: string
  description?: string
  coverImage?: string
}

export interface UpdateDeckInput extends Partial<CreateDeckInput> {
  recipes?: string[]
}
