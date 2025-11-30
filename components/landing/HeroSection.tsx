'use client'
import { IRecipe } from '../../app/types/recipe'
import RecipeCard from '../recipes/RecipeCard'
import LoginButton from './LoginButton'

const HeroSection = () => {
  const designRecipes: IRecipe[] = [
    {
      name: 'Blueberry Pancakes',
      category: 'Breakfast',
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
      servings: 1,
      kcal: 450,
      badges: ['Quick (15min)', 'Healthy'],
      image: '/images/pancake.jpg',

      isFavorite: false,
      _id: '',
      user: '',
      createdAt: '',
      updatedAt: '',
    },
    {
      name: 'Greek Salad',
      category: 'Salad',
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
      tips: [
        'Let it rest for 10 minutes before cutting to keep layers intact.',
      ],
      preparationTime: 60,
      servings: 6,
      kcal: 350,
      badges: ['Traditional', 'Kid-Friendly'],
      image: '/images/salad.jpg',
      isFavorite: true,
      user: '',
      _id: '',
      createdAt: '',
      updatedAt: '',
    },
    {
      name: 'Pasta Alla Vodka',
      category: 'Main Course',
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
      tips: ['  Rigatoni or penne sticks to the sauce better than spaghetti.'],
      preparationTime: 45,
      servings: 4,
      kcal: 420,
      badges: [
        'Vegan',
        'Gluten-Free',
        'Sugar-Free',
        'Quick (15min)',
        'Healthy',
      ],
      image: '/images/Pasta.jpg',
      isFavorite: false,
      user: '',
      _id: '',
      createdAt: '',
      updatedAt: '',
    },
  ]
  return (
    <section
      id="hero-section"
      className="h-screen w-full snap-start bg-brand-bg flex items-center justify-center pb-6 overflow-hidden short:flex-none flex-col"
    >
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-10 items-center short:gap-0">
        <div className="space-y-6 z-20 relative flex flex-col items-center text-center lg:text-start lg:items-start mt-10 lg:mt-0 short:mt-4 short:space-y-0 short:pt-10">
          <h1 className=" short:text-2xl text-5xl md:text-6xl font-bold text-brand-dark leading-tight  ">
            The Modern Way to <br /> Keep Recipes.
          </h1>
          <p className="text-xl text-brand-dark/80 max-w-md short:text-base">
            No clutter, just cards. Create recipe decks, track your macros, and
            import from social media in seconds.
          </p>

          <LoginButton />
        </div>

        <div className="relative h-[500px] w-full flex items-center justify-center lg:justify-end z-10 scale-90 lg:scale-100 short:scale-60  ">
          {/* Card 3 */}
          <div className="absolute w-full max-w-[500px] transform -translate-x-12 translate-y-8 -rotate-3 opacity-70 blur-[1px]">
            <RecipeCard
              recipe={designRecipes[0]}
              className="pointer-events-none shadow-md"
            />
          </div>

          {/* CARD 2 */}
          <div className="absolute w-full max-w-[500px] transform translate-x-6 translate-y-4 rotate-2 opacity-90 z-20">
            <RecipeCard
              recipe={designRecipes[1]}
              className="pointer-events-none shadow-md"
            />
          </div>

          {/* card 1 */}
          <div className="absolute w-full max-w-[500px] transform  hover:rotate-8 rotate-4 -translate-y-6 transition-transform duration-500 z-30">
            <RecipeCard
              recipe={designRecipes[2]}
              className="shadow-2xl pointer-events-none"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
