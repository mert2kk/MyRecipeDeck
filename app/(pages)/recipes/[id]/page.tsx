import Recipe from '@/app/components/recipes/Recipe'

export default async function RecipeDetailPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Recipe Details</h1>
      <p>Görüntülenen Tarif ID: {id}</p>
      <Recipe />

      <div className="mt-4">
        <a href={`/recipes/${id}/edit`} className="text-blue-500 underline">
          Edit this recipe
        </a>
      </div>
    </div>
  )
}
