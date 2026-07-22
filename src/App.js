import './App.css';
import Random from './components/Random';
import Tag from './components/Tag';

function App() {
  return (
    <div className="min-h-screen bg-blue-200 bg-[radial-gradient(white_2px,transparent_2px)] [background-size:22px_22px] flex flex-col items-center py-8">

      <div className="w-11/12 max-w-5xl bg-white rounded-lg shadow-md py-4 mb-10">
        <h1 className="text-4xl font-bold uppercase text-center tracking-wide">
          Random GIFS
        </h1>
      </div>

      <Random />

      <Tag />

    </div>
  );
}

export default App;