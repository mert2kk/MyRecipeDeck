import Image from "next/image";
const ImportSection = () => {
  return (
    <section className="h-screen w-full snap-start bg-brand-bg flex items-center justify-center px-6">
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-16 items-center short:gap-12">
        {/* Image) */}
        <Image
          src="/images/ImportDeck3.jpg"
          alt="Import Deck"
          width={600}
          height={600}
          className="object-cover rounded-xl pointer-events-none z-10 "
          draggable="false"
        />

        <div className="order-1 md:order-2 space-y-6">
          <h2 className="text-4xl md:text-6xl font-bold text-brand-dark short:text-2xl">
            From Your Feed <br /> to Your Deck.
          </h2>
          <p className="text-xl text-brand-dark/80 short:text-base">
            Say goodbye to lost screenshots. Copy a link from your favorite
            social media apps, and we’ll turn it into a recipe card instantly.
          </p>
          <div className="flex items-center gap-4 pt-4">
            <span className="text-brand-orange font-bold text-lg">
              ✓ Instagram
            </span>
            <span className="text-brand-orange font-bold text-lg">
              ✓ TikTok
            </span>
            <span className="text-brand-orange font-bold text-lg">
              ✓ Websites
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImportSection;
