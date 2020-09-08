import {GREED_SIZE, SudokuUtils} from './SudokuUtils';

export class Sudoku {

  public static createSolution(): Sudoku {
    return  new Sudoku().generateSudoku();
  }

  private _result: number[] = [];

  get result(): number[] {
    return this._result;
  }

  /**
   *  @description
   *  Будет использовать как дерево нодов в процессе бектрекинга.
   *  Каждая ячейка имеет 9 рандомно-сгенеренных путей
   */
  private map: number[][] = [];

  /**
   * @description
   *  История процесса бектрекинга, будет наполнятся валидными кандидатами
   **/
  private stack: number[] = [];

  private constructor() {
    this._result = SudokuUtils.GENERATE_ARRAY(GREED_SIZE * GREED_SIZE, () => null);
    this.map = SudokuUtils.GENERATE_ARRAY(GREED_SIZE * GREED_SIZE, () => SudokuUtils.GENERATE_RANDOM_ROW());
  }

  private generateSudoku(): Sudoku {
    const instance = new Sudoku();
    instance.tryGenerate(this.map, 0);

    return instance;
  }

  private validate(map, index): boolean {
    if (!map[index].length) {
      return false;
    }

    this.stack.splice(index, this.stack.length);

    const path = map[index];
    const candidate = path[path.length - 1];

    return this.isValidCandidate(this.stack, candidate, index);
  }

  private isValidCandidate(map: number[],
                           candidate: number,
                           index: number): boolean {
    const rowIndex = Math.floor(index / 9);
    const colIndex = index % 9;

    const row = map.slice(rowIndex * GREED_SIZE, GREED_SIZE * (rowIndex + 1));
    const col = map.filter((e, i) => i % 9 === colIndex);

    const boxRow = Math.floor(rowIndex / 3);
    const boxCol = Math.floor(colIndex / 3);

    const box = map.filter((e, i) =>
      Math.floor(Math.floor(i / 9) / 3) === boxRow &&
      Math.floor((i % 9) / 3) === boxCol
    );

    const isRowValid = (row.indexOf(candidate) === -1);
    const isColValid = (col.indexOf(candidate) === -1);
    const isBoxValid = (box.indexOf(candidate) === -1);

    return (isRowValid && isColValid && isBoxValid);
  }

  private tryGenerate(map: number[][], index: number): boolean {
    if (index === GREED_SIZE * GREED_SIZE) {
      return true;
    }

    const path = map[index];

    if (!path.length) {
      map[index] = SudokuUtils.GENERATE_SORTED_ROW();
      map[index - 1].pop();
      return false;
    }

    const currentCandidate = path[path.length - 1];

    const isValid = this.validate(map, index);
    if (!isValid) {
      map[index].pop();
      map[index + 1] = SudokuUtils.GENERATE_SORTED_ROW();
      return false;
    } else {
      this.stack.push(currentCandidate);
    }

    for (const idx of path) {
      if (this.tryGenerate(map, index + 1)) {
        this._result[index] = currentCandidate;
        return true;
      }
    }

    return false;
  }
}
