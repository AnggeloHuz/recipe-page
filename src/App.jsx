import omelete from '../public/image-omelette.jpeg'
import Description from './components/Description'
import Ingredients from './components/Ingredients'
import Instructions from './components/Instructions'
import Nutrition from './components/Nutrition'
import Preparation from './components/Preparation'

function App() {
  return (
    <>
      <main className="w-full h-auto bg-White flex flex-col xl:px-12 xl:py-8">
        <div className="mb-4 xl:p-6 ">
          <img src={omelete} alt="omelette" className="xl:rounded-lg" />
        </div>

        <Description />
        <Preparation />
        <Ingredients />
        <Instructions />
        <Nutrition />
      </main>
    </>
  );
}

export default App
