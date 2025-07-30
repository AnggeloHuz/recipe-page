function Preparation() {
  return (
    <>
      <section className="p-6 flex flex-col gap-4">
        <div className="p-6 bg-Rose-50 flex flex-col gap-4 rounded-lg">
          <h4 className="text-Rose-800 font-bold text-xl font-Outfit">
            Preparation time
          </h4>

          <ul className="text-base font-Outfit">
            <li className="text-Stone-600 font-medium mb-2 px-4 flex items-center">
              <span class="text-Rose-800 text-lg font-bold mr-8">&#x2022;</span>
              <span>
                <b>Total: </b>Approximately 10 minutes
              </span>
            </li>
            <li className="text-Stone-600 font-medium mb-2 px-4 flex items-center">
              <span class="text-Rose-800 text-lg font-bold mr-8">&#x2022;</span>
              <span>
                <b>Preparation: </b>5 minutes
              </span>
            </li>
            <li className="text-Stone-600 font-medium mb-2 px-4 flex items-center">
              <span class="text-Rose-800 text-lg font-bold mr-8">&#x2022;</span>
              <span>
                <b>Cooking: </b>5 minutes
              </span>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}

export default Preparation