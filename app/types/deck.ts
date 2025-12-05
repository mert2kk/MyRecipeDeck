export interface IDeck<T = string> {
  _id: string
  name: string
  description?: string
  recipes: T[]
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
