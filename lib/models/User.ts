import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, 'Please provide a username.'],
      maxlength: [20, 'Username cannot be more than 20 characters.'],
    },
    email: {
      type: String,
      required: [true, 'Please provide an email address.'],
      unique: true,
    },
    image: {
      type: String,
    },
    bio: {
      type: String,
      maxlength: [160, 'Bio cannot be more than 160 characters.'],
      default: 'I love cooking!',
    },
  },
  {
    timestamps: true,
  },
)

export default mongoose.models.User || mongoose.model('User', UserSchema)
