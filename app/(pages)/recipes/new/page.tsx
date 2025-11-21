import RecipeForm from '@/components/recipes/RecipeForm'

export default function page() {
  return (
    <div
      className="h-[80vh] overflow-auto rounded-2xl w-[80vw] 
        shadow-[0_10px_25px_rgba(0,0,0,0.15),0_20px_50px_rgba(0,0,0,0.1)]
         transition-all duration-1200 ease-in-out
         hover:shadow-[0_15px_40px_rgba(0,0,0,0.2),0_25px_60px_rgba(0,0,0,0.12)]
         hover:-translate-y-1
         hover:scale-101
         hover:backdrop-brightness-102"
    >
      <RecipeForm />
    </div>
  )
}
