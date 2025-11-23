import RecipeDeck from "../decks/RecipeDeck";

const DeckSection = () => {
  return (
    <section className="h-screen w-full snap-start bg-brand-bg flex flex-col items-center justify-center pb-10 text-center  ">
      <div className="max-w-4xl mb-20 ">
        <h2 className="text-4xl md:text-6xl font-bold text-brand-dark mb-4">
          Curate Your Personal Decks.
        </h2>
        <p className="text-xl text-brand-dark/80">
          Stop scrolling through endless lists. Group your recipe cards into
          visual decks.
        </p>
      </div>
      {/* 3 Deck  */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-16 max-w-6xl w-auto pointer-events-none items-center ">
        <RecipeDeck
          title="Breakfast"
          image="https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          BadgeTags={["Morning", "Easy"]}
          RecipeNumber="10"
          className="flex"
        />

        <RecipeDeck
          title="High Protein"
          image="https://plus.unsplash.com/premium_photo-1722859223421-eebf550918e1?q=80&w=1878&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          BadgeTags={["Quick", "Healthy"]}
          RecipeNumber="8"
          className="hidden lg:flex"
        />
        <RecipeDeck
          title="Desserts"
          image="https://images.unsplash.com/photo-1499636136210-6f4ee915583e?q=80&w=928&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          BadgeTags={["Sweet", "Indulgent"]}
          RecipeNumber="15"
          className=" hidden lg:flex"
        />
      </div>
    </section>
  );
};

export default DeckSection;
