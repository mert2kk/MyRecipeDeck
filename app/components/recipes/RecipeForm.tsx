export default function RecipeForm() {
  return (
    <div>
      <h1 className="text-xl font-bold text-orange-600">Edit Recipe</h1>
      <p className="text-sm text-gray-500">Editing ID: {}</p>

      <form className="mt-4 space-y-4">
        <div>
          <label className="block text-sm">Recipe Name</label>
          <input
            type="text"
            className="border p-2 w-full rounded"
            placeholder="Pasta..."
          />
        </div>
        <button className="bg-green-600 text-white px-4 py-2 rounded">
          Save Changes
        </button>
      </form>
    </div>
  )
}
