import mongoose from 'mongoose'

const DeckSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please provide a deck name.'],
      maxlength: [30, 'Deck name cannot be more than 30 characters.'],
    },
    description: {
      type: String,
      maxlength: 200,
    },
    recipes: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Recipe',
      },
    ],
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
      index: true,
    },
    coverImage: {
      type: String,
      default: 'default-deck.jpg',
    },
  },
  {
    timestamps: true,
  },
)

export default mongoose.models.Deck || mongoose.model('Deck', DeckSchema)
