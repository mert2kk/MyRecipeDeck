const FooterSection = () => {
  return (
    // Arka plan burada Dark Blue (#242d4d) oluyor
    <section className="h-screen w-full snap-start bg-brand-dark flex flex-col items-center justify-center px-6 text-center relative">
      <div className="max-w-3xl space-y-8 ">
        <h2 className="text-5xl md:text-7xl font-bold text-white">
          Ready to Build <br /> Your Deck?
        </h2>
        <p className="text-xl text-brand-bg/70">
          Join now and turn your kitchen chaos into a curated collection. <br />{" "}
          Free to start.
        </p>

        <button className="bg-brand-orange text-white px-10 py-5 rounded-full font-bold text-xl hover:bg-opacity-90 transition shadow-2xl shadow-brand-orange/30 mt-8">
          Get Started with Google
        </button>
      </div>

      {/* En alt kısım */}
      <div className="absolute bottom-8 text-brand-bg/40 text-sm">
        © 2025 MyRecipeDeck. Privacy Policy • Terms of Service
      </div>
    </section>
  );
};

export default FooterSection;
