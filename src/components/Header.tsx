import ArraySizeForm from "./ArraySizeForm";
import AlgorithmSelect from "./AlgorithmSelect";

interface Props {
  setBars: React.Dispatch<React.SetStateAction<Bar[]>>;
  selectedAlgorithm: string;
  setSelectedAlgorithm: React.Dispatch<React.SetStateAction<string>>;
}

export default function Header({ setBars, selectedAlgorithm, setSelectedAlgorithm }: Props) {
  return (
    <header className="bg-sky-900 flex flex-col justify-center items-center flex-wrap gap-6 py-4 text-slate-100 text-xl shadow-2xl shadow-sky-900/50">
      <h1 className="text-center text-4xl font-coda font-bold text-slate-50">Sorting Algorithm Visualizer</h1>
      <div className="flex flex-col gap-4">
        <ArraySizeForm setBars={setBars} />
        <AlgorithmSelect selectedAlgorithm={selectedAlgorithm} setSelectedAlgorithm={setSelectedAlgorithm} />
      </div>
    </header>
  );
}