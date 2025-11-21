import mongoose from 'mongoose'

const MONGODB_URI = process.env.MONGO_URI
console.log('MONGODB_URI:', process.env)
async function dbConnect() {
  if (!MONGODB_URI) {
    throw new Error('Please define the MONGODB_URI environment variable')
  }
  await mongoose.connect(MONGODB_URI)
  console.log('MongoDB connected')

  return mongoose
}

export default dbConnect
