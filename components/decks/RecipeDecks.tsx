import RecipeDeck from "./RecipeDeck";

export default function RecipeDecks() {
  return (
    <div className="w-full p-10 grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-20 justify-items-center ">
      <RecipeDeck
        title="Breakfast"
        image="https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        BadgeTags={["Morning", "Easy"]}
        RecipeNumber="10"
      />

      <RecipeDeck
        title="High Protein"
        image="https://plus.unsplash.com/premium_photo-1722859223421-eebf550918e1?q=80&w=1878&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        BadgeTags={["Quick", "Healthy"]}
        RecipeNumber="8"
      />
      <RecipeDeck
        title="Desserts"
        image="https://images.unsplash.com/photo-1499636136210-6f4ee915583e?q=80&w=928&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        BadgeTags={["Sweet", "Indulgent"]}
        RecipeNumber="15"
      />
      <RecipeDeck
        title="Breakfast"
        image="https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        BadgeTags={["Morning", "Easy"]}
        RecipeNumber="10"
      />

      <RecipeDeck
        title="High Protein"
        image="https://plus.unsplash.com/premium_photo-1722859223421-eebf550918e1?q=80&w=1878&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        BadgeTags={["Quick", "Healthy"]}
        RecipeNumber="8"
      />
      <RecipeDeck
        title="Desserts"
        image="https://images.unsplash.com/photo-1499636136210-6f4ee915583e?q=80&w=928&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        BadgeTags={["Sweet", "Indulgent"]}
        RecipeNumber="15"
      />
    </div>
  );
}
