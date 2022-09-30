import generateArray from "./generateArray";
import { nanoid } from "nanoid";

export default function makeBars(sizeOfArray: number): Bar[] {
  const randomNumberArray = generateArray(sizeOfArray);
  return randomNumberArray.map((number, index) => {
    return {
      value: number,
      element: <span key={nanoid()}>{number}|</span>,
      initialPosition: index,
    }
  });
}