function Nutrition() {
  return (
    <>
      <section className="px-6">
        <div className="flex flex-col gap-4 py-6">
          <h2 className="text-Brown-800 font-semibold text-2xl font-Young-Serif">
            Nutrition
          </h2>

          <p className="text-Stone-600 font-Outfit font-medium text-base">
            The table below shows nutritional values per serving without the
            additional fillings.
          </p>

          <table className="font-Outfit font-medium">
            <tr className="border-b border-Stone-150">
              <td className="text-Stone-600 px-6 py-3">Calories</td>
              <td className="text-Brown-800 px-6 py-3">277kcal</td>
            </tr>
            <tr className="border-b border-Stone-150">
              <td className="text-Stone-600 px-6 py-3">Carbs</td>
              <td className="text-Brown-800 px-6 py-3">0g</td>
            </tr>
            <tr className="border-b border-Stone-150">
              <td className="text-Stone-600 px-6 py-3">Protein</td>
              <td className="text-Brown-800 px-6 py-3">20g</td>
            </tr>
            <tr>
              <td className="text-Stone-600 px-6 py-3">Fat</td>
              <td className="text-Brown-800 px-6 py-3">22g</td>
            </tr>
          </table>
        </div>
      </section>
    </>
  );
}

export default Nutrition