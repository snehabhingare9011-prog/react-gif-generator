import './App.css';
import Random from './components/Random';
import Tag from './components/Tag';

function App() {

   return (
  <div className="min-h-screen bg-[#B7D4FF] bg-[radial-gradient(white_2px,transparent_2px)] [background-size:24px_24px] flex flex-col items-center pb-10">

    <div className="w-full bg-white shadow-md py-3">
      <h1 className="text-4xl font-bold uppercase text-center">
        Random GIFS
      </h1>
    </div>

    <div className="mt-10 flex flex-col gap-10">
      <Random />
      <Tag />
    </div>

  </div>
);
  
}

export default App;