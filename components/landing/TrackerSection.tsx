const TrackerSection = () => {
  return (
    <section className="h-screen w-full snap-start bg-brand-bg flex items-center justify-center px-6">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* Text */}
        <div className="space-y-6">
          <h2 className="text-4xl md:text-6xl font-bold text-brand-dark">
            Stay on Track.
          </h2>
          <p className="text-xl text-brand-dark/80">
            It’s not just about recipes. Log your daily meals to keep an eye on
            your calories and macros. A simple, integrated way to maintain your
            balance.
          </p>
        </div>

        {/* Right  */}
        <div className="bg-white rounded-3xl h-[400px] w-full shadow-lg p-8 flex flex-col justify-center space-y-6 short:h-[300px]">
          <div className="flex justify-between items-end mb-2">
            <span className="text-brand-dark font-bold text-xl">
              Daily Goal
            </span>
            <span className="text-brand-orange font-bold">
              1800 / 2200 kcal
            </span>
          </div>
          {/* Basit Progress Bar */}
          <div className="w-full bg-gray-200 rounded-full h-6">
            <div
              className="bg-brand-orange h-6 rounded-full"
              style={{ width: "75%" }}
            ></div>
          </div>

          <div className="grid grid-cols-3 gap-4 mt-8 text-center">
            <div className="bg-brand-bg p-4 rounded-xl">
              <div className="font-bold text-brand-dark">Protein</div>
              <div className="text-brand-orange">120g</div>
            </div>
            <div className="bg-brand-bg p-4 rounded-xl">
              <div className="font-bold text-brand-dark">Carbs</div>
              <div className="text-brand-orange">200g</div>
            </div>
            <div className="bg-brand-bg p-4 rounded-xl">
              <div className="font-bold text-brand-dark">Fat</div>
              <div className="text-brand-orange">60g</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrackerSection;
