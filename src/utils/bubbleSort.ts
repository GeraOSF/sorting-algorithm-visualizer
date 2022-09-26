export default function bubbleSort(unsortedArray: number[]): number[] {
  const array = [...unsortedArray];
  const length = array.length;
  let swaps: number;
  let iterations = 0;
  do {
    swaps = 0;
    for (let i = 0; i < length - iterations - 1; i++) {
      if (array[i] <= array[i + 1]) continue;
      const temp = array[i];
      array[i] = array[i + 1];
      array[i + 1] = temp;
      swaps++;
    }
    iterations++;
  } while (swaps > 0);
  return array;
}
