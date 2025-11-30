export interface Ingredient {
  name: string
  amount: string
}

export type RecipeCategory =
  | 'Breakfast'
  | 'Main Course'
  | 'Dessert'
  | 'Soup'
  | 'Salad'
  | 'Snack'
  | 'Drink'
  | 'Appetizer'
  | 'Pastry'
  | 'Sauce'
  | 'Diet'
  | 'Other'

export type RecipeBadge =
  | 'Vegan'
  | 'Vegetarian'
  | 'Gluten-Free'
  | 'Sugar-Free'
  | 'Low-Carb'
  | 'High-Protein'
  | 'Keto'
  | 'Paleo'
  | 'Quick (15min)'
  | 'Budget-Friendly'
  | 'Kid-Friendly'
  | 'Spicy'
  | 'Traditional'
  | 'Healthy'

export interface IRecipe {
  _id: string
  name: string
  ingredients: Ingredient[]
  instructions: string[]
  tips?: string[]
  category: RecipeCategory
  badges?: RecipeBadge[]
  servings?: number
  preparationTime?: number
  kcal?: number
  image?: string
  isFavorite: boolean
  user: string
  createdAt: string
  updatedAt: string
}
