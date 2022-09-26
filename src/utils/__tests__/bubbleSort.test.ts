import { describe, expect, it } from "vitest";
import generateArray from "../generateArray";
import bubbleSort from "../bubbleSort";

describe("sorting", () => {
  const unsortedArray = generateArray(100);
  const sortedArray = [...unsortedArray].sort((a, b) => a - b);

  it("should sort the input array", () => {
    expect(bubbleSort(unsortedArray)).toStrictEqual(sortedArray);
  })
})
