function Ingredients() {
  return (
    <>
      <section className="px-6">
        <div className="flex flex-col gap-4 py-6 border-b border-Stone-150">
          <h2 className="text-Brown-800 font-semibold text-2xl font-Young-Serif">
            Ingredients
          </h2>

          <ul className="list-disc px-6 font-Outfit text-Stone-600">
            <li className="mb-2 px-3">2-3 large eggs</li>
            <li className="mb-2 px-3">Salt, to taste</li>
            <li className="mb-2 px-3">Pepper, to taste</li>
            <li className="mb-2 px-3">1 tablespoon of butter or oil</li>
            <li className="mb-2 px-3">
              Optional fillings: cheese, diced vegetables, cooked meats, herbs
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}

export default Ingredients