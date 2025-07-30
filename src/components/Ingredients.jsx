function Ingredients() {
  return (
    <>
      <section className="px-6">
        <div className="flex flex-col gap-4 py-6 border-b border-Stone-150">
          <h2 className="text-Brown-800 font-semibold text-2xl font-Young-Serif">
            Ingredients
          </h2>

          <ul className="list-disc font-Outfit text-Stone-600">
            <li className="mb-2 px-3 flex gap-8 items-center"><span class="text-Brown-800 text-lg font-bold">&#x2022;</span>2-3 large eggs</li>
            <li className="mb-2 px-3 flex gap-8 items-center"><span class="text-Brown-800 text-lg font-bold">&#x2022;</span>Salt, to taste</li>
            <li className="mb-2 px-3 flex gap-8 items-center"><span class="text-Brown-800 text-lg font-bold">&#x2022;</span>Pepper, to taste</li>
            <li className="mb-2 px-3 flex gap-8 items-center"><span class="text-Brown-800 text-lg font-bold">&#x2022;</span>1 tablespoon of butter or oil</li>
            <li className="mb-2 px-3 flex gap-8 items-center">
              <span class="text-Brown-800 text-lg font-bold">&#x2022;</span>Optional fillings: cheese, diced vegetables, cooked meats, herbs
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}

export default Ingredients