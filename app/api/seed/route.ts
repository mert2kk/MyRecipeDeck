import dbConnect from '@/lib/db'
import Deck from '@/lib/models/Deck'
import Recipe from '@/lib/models/Recipe'
import User from '@/lib/models/User'
import { getServerSession } from 'next-auth'
import { NextResponse } from 'next/server'
import { authOptions } from '../auth/[...nextauth]/route'

const getMockRecipes = (userId: string) => [
  {
    name: 'Avocado & Poached Egg Toast',
    category: 'Breakfast',
    ingredients: [
      { name: 'Sourdough Bread', amount: '2 slices' },
      { name: 'Ripe Avocado', amount: '1 whole' },
    ],
    instructions: ['Toast bread', 'Mash avocado'],
    preparationTime: 15,
    servings: 1,
    kcal: 450,
    badges: ['Vegetarian', 'Quick (15min)'],
    image:
      'https://images.unsplash.com/photo-1559753475-d6165680861f?q=80&w=1740&auto=format&fit=crop',
    isFavorite: false,
    user: userId,
  },
  {
    name: 'Classic Beef Lasagna',
    category: 'Main Course',
    ingredients: [{ name: 'Ground Beef', amount: '500g' }],
    instructions: ['Bake at 180°C'],
    preparationTime: 60,
    servings: 6,
    kcal: 750,
    badges: ['Traditional'],
    image:
      'https://images.unsplash.com/photo-1619895092538-128341789043?auto=format&fit=crop&w=800&q=80',
    isFavorite: true,
    user: userId,
  },
  {
    name: 'Green Detox Smoothie',
    category: 'Drink',
    ingredients: [{ name: 'Spinach', amount: '1 handful' }],
    instructions: ['Blend everything'],
    preparationTime: 5,
    servings: 1,
    kcal: 120,
    badges: ['Vegan', 'Healthy'],
    image:
      'https://images.unsplash.com/photo-1610970881699-44a5587cabec?auto=format&fit=crop&w=800&q=80',
    isFavorite: false,
    user: userId,
  },
  {
    name: 'Grilled Salmon',
    category: 'Main Course',
    ingredients: [{ name: 'Salmon', amount: '200g' }],
    instructions: ['Grill it'],
    preparationTime: 25,
    servings: 2,
    kcal: 500,
    badges: ['High-Protein'],
    image:
      'https://images.unsplash.com/photo-1622123268092-d99ea535491e?w=500&auto=format&fit=crop',
    isFavorite: false,
    user: userId,
  },
  {
    name: 'Vegan Brownie',
    category: 'Dessert',
    ingredients: [{ name: 'Cocoa', amount: '50g' }],
    instructions: ['Bake it'],
    preparationTime: 40,
    servings: 8,
    kcal: 320,
    badges: ['Vegan'],
    image:
      'https://images.unsplash.com/photo-1636743715220-d8f8dd900b87?w=500&auto=format&fit=crop',
    isFavorite: false,
    user: userId,
  },
]

const getMockDecks = (userId: string, insertedRecipes: any[]) => [
  {
    name: 'Quick & Easy Dinners',
    description: 'Perfect for busy weeknights.',
    coverImage:
      'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=800&q=80',
    user: userId,
    // BURASI DÜZELDİ: Hardcoded string yerine, eklenen tariflerin gerçek _id'lerini alıyoruz
    recipes: [
      insertedRecipes[0]._id, // Avocado Toast
      insertedRecipes[2]._id, // Smoothie
      insertedRecipes[3]._id, // Salmon
    ],
  },
  {
    name: 'Healthy Greens',
    description: 'Nutritious and fresh recipes.',
    coverImage:
      'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80',
    user: userId,
    recipes: [
      insertedRecipes[2]._id, // Smoothie
      insertedRecipes[0]._id, // Avocado Toast
    ],
  },
]

export async function GET() {
  try {
    await dbConnect()
    const session = await getServerSession(authOptions)

    if (!session || !session.user?.email) {
      return NextResponse.json({ error: 'Giriş yapmalısınız' }, { status: 401 })
    }

    const currentUser = await User.findOne({ email: session.user.email })
    if (!currentUser)
      return NextResponse.json({ error: 'Kullanıcı yok' }, { status: 404 })

    await Recipe.deleteMany({ user: currentUser._id })
    await Deck.deleteMany({ user: currentUser._id })

    // 2. Tarifleri hazırla
    const rawRecipes = getMockRecipes(currentUser._id)

    // 3. Tarifleri Ekle ve GERÇEK VERİLERİ (ID'leri ile birlikte) bir değişkene ata
    const insertedRecipes = await Recipe.insertMany(rawRecipes)

    // 4. Deck'leri bu gerçek recipe dataları ile oluştur
    const decks = getMockDecks(currentUser._id, insertedRecipes)

    // 5. Deck'leri ekle
    await Deck.insertMany(decks)

    return NextResponse.json({
      message: `Başarılı! ${insertedRecipes.length} tarif ve ${decks.length} deck oluşturuldu. İlişkiler kuruldu.`,
    })
  } catch (error: any) {
    console.error('Seed hatası:', error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
