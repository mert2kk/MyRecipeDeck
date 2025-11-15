import Recipe from '@/app/components/recipes/Recipe'

export default async function RecipeDetailPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params

  return (
    <div
      className="h-5/6 flex w-2/3 flex-wrap rounded-2xl 
        shadow-[0_10px_25px_rgba(0,0,0,0.15),0_20px_50px_rgba(0,0,0,0.1)]
         transition-all duration-1200 ease-in-out
         hover:shadow-[0_15px_40px_rgba(0,0,0,0.2),0_25px_60px_rgba(0,0,0,0.12)]
         hover:-translate-y-1
         hover:scale-101
         hover:backdrop-brightness-102"
    >
      {/* <p>Görüntülenen Tarif ID: {id}</p> */}
      <Recipe />

      {/* <a href={`/recipes/${id}/edit`} className="text-blue-500 underline">
        Edit this recipe
      </a> */}
    </div>
  )
}
