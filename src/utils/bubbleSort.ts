export default function bubbleSort(unsortedArray: number[]): number[] {
  const array = [...unsortedArray];
  const length = array.length;
  let swaped: boolean;
  let iterations = 0;
  do {
    swaped = false;
    for (let i = 0; i < length - iterations - 1; i++) {
      if (array[i] <= array[i + 1]) continue;
      const temp = array[i];
      array[i] = array[i + 1];
      array[i + 1] = temp;
      swaped = true;
    }
    iterations++;
  } while (swaped);
  return array;
}
