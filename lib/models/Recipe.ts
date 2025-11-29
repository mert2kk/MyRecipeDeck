import mongoose from 'mongoose'

const RecipeSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please provide a recipe name.'],
      maxlength: [60, 'Name cannot be more than 60 characters.'],
    },
    ingredients: [
      {
        name: String,
        amount: String,
      },
    ],
    instructions: [String],
    tips: [String],
    servings: Number,
    preparationTime: Number,
    kcal: Number,
    category: {
      type: String,
      enum: [
        'Breakfast',
        'Main Course',
        'Dessert',
        'Soup',
        'Salad',
        'Snack',
        'Drink',
        'Appetizer',
        'Pastry',
        'Sauce',
        'Diet',
        'Other',
      ],
      required: [true, 'Please select a category.'],
    },
    badges: [
      {
        type: String,
        enum: [
          'Vegan',
          'Vegetarian',
          'Gluten-Free',
          'Sugar-Free',
          'Low-Carb',
          'High-Protein',
          'Keto',
          'Paleo',
          'Quick (15min)',
          'Budget-Friendly',
          'Kid-Friendly',
          'Spicy',
          'Traditional',
        ],
      },
    ],
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    isFavorite: {
      type: Boolean,
      default: false,
    },
    image: {
      type: String,
      default: '',
    },
  },
  {
    timestamps: true,
  },
)

export default mongoose.models.Recipe || mongoose.model('Recipe', RecipeSchema)
