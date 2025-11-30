// app/api/seed/route.ts
import dbConnect from '@/lib/db'
import Recipe from '@/lib/models/Recipe'
import User from '@/lib/models/User'
import { getServerSession } from 'next-auth'
import { NextResponse } from 'next/server'
import { authOptions } from '../auth/[...nextauth]/route'

// Senin tanımladığın tiplerle uyumlu veri yapısı
// (Not: _id, createdAt ve updatedAt MongoDB tarafından otomatik oluşturulur,
// o yüzden buradaki input verisine dahil etmiyoruz)
const getMockRecipes = (userId: string) => [
  {
    name: 'Avocado & Poached Egg Toast',
    category: 'Breakfast', // Senin RecipeCategory tipine uygun
    ingredients: [
      { name: 'Sourdough Bread', amount: '2 slices' },
      { name: 'Ripe Avocado', amount: '1 whole' },
      { name: 'Large Eggs', amount: '2' },
      { name: 'Chili Flakes', amount: '1 pinch' },
    ],
    instructions: [
      'Toast the sourdough bread slices until golden brown.',
      'Mash the avocado with a fork and spread it over the toast.',
      'Poach the eggs in simmering water for 3 minutes.',
      'Place eggs on top and sprinkle with chili flakes.',
    ],
    tips: [
      'Use fresh organic eggs for the best poaching results.',
      'Add a squeeze of lime to the avocado to prevent browning.',
    ],
    preparationTime: 15,
    servings: 1, // Interface'de 'servings' çoğul tanımlı
    kcal: 450,
    badges: ['Vegetarian', 'Quick (15min)', 'Healthy'], // RecipeBadge tipine uygun
    image:
      'https://images.unsplash.com/photo-1525351484163-7529414395d8?auto=format&fit=crop&w=800&q=80',
    isFavorite: false,
    user: userId,
  },
  {
    name: 'Classic Beef Lasagna',
    category: 'Main Course',
    ingredients: [
      { name: 'Ground Beef', amount: '500g' },
      { name: 'Lasagna Sheets', amount: '1 pack' },
      { name: 'Bechamel Sauce', amount: '2 cups' },
      { name: 'Mozzarella Cheese', amount: '200g' },
    ],
    instructions: [
      'Sauté the ground beef with onions and tomato sauce.',
      'Layer the lasagna sheets, meat sauce, and bechamel in a baking dish.',
      'Top with generous amounts of mozzarella cheese.',
      'Bake at 180°C for 45 minutes.',
    ],
    tips: ['Let it rest for 10 minutes before cutting to keep layers intact.'],
    preparationTime: 60,
    servings: 6,
    kcal: 750,
    badges: ['Traditional', 'Kid-Friendly'],
    image:
      'https://images.unsplash.com/photo-1574868235805-6527663f790c?auto=format&fit=crop&w=800&q=80',
    isFavorite: true, // Bunu favori yapalım
    user: userId,
  },
  {
    name: 'Green Detox Smoothie',
    category: 'Drink',
    ingredients: [
      { name: 'Spinach', amount: '1 handful' },
      { name: 'Green Apple', amount: '1' },
      { name: 'Lemon Juice', amount: '1/2 lemon' },
      { name: 'Ginger', amount: '1 small piece' },
    ],
    instructions: [
      'Wash all ingredients thoroughly.',
      'Place everything into a high-speed blender.',
      'Blend until smooth and creamy.',
    ],
    tips: ['Add ice cubes for a colder, fresher taste.'],
    preparationTime: 5,
    servings: 1,
    kcal: 120,
    badges: ['Vegan', 'Gluten-Free', 'Sugar-Free', 'Quick (15min)', 'Healthy'],
    image:
      'https://images.unsplash.com/photo-1610970881699-44a5587cabec?auto=format&fit=crop&w=800&q=80',
    isFavorite: false,
    user: userId,
  },
  {
    name: 'Grilled Salmon with Asparagus',
    category: 'Main Course',
    ingredients: [
      { name: 'Salmon Fillet', amount: '2 pieces' },
      { name: 'Asparagus', amount: '1 bunch' },
      { name: 'Olive Oil', amount: '2 tbsp' },
      { name: 'Garlic', amount: '2 cloves' },
    ],
    instructions: [
      'Season the salmon with salt, pepper, and garlic.',
      'Grill the salmon for 4-5 minutes per side.',
      'Sauté the asparagus in olive oil until tender.',
    ],
    preparationTime: 25,
    servings: 2,
    kcal: 500,
    badges: ['High-Protein', 'Keto', 'Paleo', 'Gluten-Free', 'Healthy'],
    image:
      'https://images.unsplash.com/photo-1467003909585-2f8a7270028d?auto=format&fit=crop&w=800&q=80',
    isFavorite: false,
    user: userId,
  },
  {
    name: 'Vegan Chocolate Brownie',
    category: 'Dessert',
    ingredients: [
      { name: 'Oat Flour', amount: '2 cups' },
      { name: 'Cocoa Powder', amount: '1/2 cup' },
      { name: 'Maple Syrup', amount: '1/2 cup' },
      { name: 'Coconut Oil', amount: '1/3 cup' },
    ],
    instructions: [
      'Mix all dry ingredients in a large bowl.',
      'Add the wet ingredients and stir until combined.',
      'Pour into a baking tray and bake for 25 minutes at 180°C.',
    ],
    tips: ['Do not overbake if you want them fudgy!'],
    preparationTime: 40,
    servings: 8,
    kcal: 320,
    badges: ['Vegan', 'Sugar-Free', 'Kid-Friendly'],
    image:
      'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80',
    isFavorite: false,
    user: userId,
  },
]

export async function GET() {
  try {
    await dbConnect()

    // 1. Session Kontrolü
    const session = await getServerSession(authOptions)

    if (!session || !session.user?.email) {
      return NextResponse.json(
        { error: '⛔ Lütfen önce siteye giriş yapın.' },
        { status: 401 },
      )
    }

    // 2. User ID Bulma
    const currentUser = await User.findOne({ email: session.user.email })

    if (!currentUser) {
      return NextResponse.json(
        { error: 'Kullanıcı bulunamadı.' },
        { status: 404 },
      )
    }

    // 3. Verileri Hazırla ve Yükle
    const recipes = getMockRecipes(currentUser._id)

    // Temiz bir sayfa için eski tariflerini silebiliriz (İsteğe bağlı)
    // await Recipe.deleteMany({ user: currentUser._id });

    await Recipe.insertMany(recipes)

    return NextResponse.json({
      message: `Başarılı! ${currentUser.username} hesabına 5 adet tam uyumlu tarif eklendi.`,
      count: recipes.length,
    })
  } catch (error: any) {
    console.error('Seed hatası:', error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
