import { useState } from 'react';
import makeBars from './utils/makeBars';
import Header from './components/Header';
import bubbleSort from './utils/bubbleSort';

function App() {
  const [selectedAlgorithm, setSelectedAlgorithm] = useState('bubble-sort');
  const [bars, setBars] = useState(makeBars(50));
  console.log(bars);
  // function sort(bars.value) {
  //   switch(selectedAlgorithm) {
  //     case "bubble-sort":
  //       bubbleSort(bars.value);
  //       break;
  //     case "selection-sort":
  //       selectionSort(bars.value);
  //       break;
  //     case "merge-sort":
  //       mergeSort(bars.value);
  //       break;
  //   }
  // }

  return (
    <>
      <Header setBars={setBars} selectedAlgorithm={selectedAlgorithm} setSelectedAlgorithm={setSelectedAlgorithm} />
      <main className="text-slate-50">
        {bars.map(bar => bar.element)}
      </main>
    </>
  )
}

export default App
