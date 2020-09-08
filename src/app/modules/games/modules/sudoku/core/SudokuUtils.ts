
export const SUB_GREED_SIZE = 3;

export const GREED_SIZE = SUB_GREED_SIZE * 3;

export class SudokuUtils {

  public static RANDOM_INT_IN_RANGE = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min;

  public static GENERATE_RANDOM_NUMBER = (base = GREED_SIZE) => Math.floor(Math.random() * base);

  public static GENERATE_ARRAY = (arrayLength = 1, mapfn = (v, k) => null) =>  Array.from(new Array(arrayLength), mapfn);

  public static GENERATE_SORTED_ROW = (arrayLength = GREED_SIZE) => SudokuUtils.GENERATE_ARRAY(arrayLength, (v, i) => i + 1);

  public static GENERATE_RANDOM_ROW = () => {
    const randomRow = [];
    const sortedRow = SudokuUtils.GENERATE_SORTED_ROW();

    while (sortedRow.length > 0) {
      const index = SudokuUtils.GENERATE_RANDOM_NUMBER(sortedRow.length);
      randomRow.push(sortedRow[index]);
      sortedRow.splice(index, 1);
    }

    return randomRow;
  }
}
