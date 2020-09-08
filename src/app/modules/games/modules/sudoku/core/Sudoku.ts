import {GREED_SIZE, SudokuUtils} from './SudokuUtils';
import {Cell} from './Cell';
import {SudokuGreed} from './SudokuGreed';

export class Sudoku {

  public static createSolution(difficulty: number): SudokuGreed {
    const board = new Sudoku(difficulty).generateSudoku().getPreparedBoard();
    console.log(board);
    return board;
  }

  private result: Cell[] = [];

  /**
   *  @description
   *  Will be used as the nodeTree in the process of backtracking.
   *  Each cell has 9 alternative randomly generated paths.
   */
  private map: number[][] = [];

  /**
   * @description
   *  История процесса бектрекинга, будет наполнятся валидными кандидатами
   **/
  private stack: number[] = [];

  private constructor(private difficulty: number) {
    this.result = SudokuUtils.GENERATE_ARRAY(GREED_SIZE * GREED_SIZE, () => null);
    this.map = SudokuUtils.GENERATE_ARRAY(GREED_SIZE * GREED_SIZE, () => SudokuUtils.GENERATE_RANDOM_ROW());
  }

  private generateSudoku(): Sudoku {
    const instance = new Sudoku(this.difficulty);
    instance.tryGenerate(this.map, 0);

    return instance;
  }

  private getPreparedBoard(): SudokuGreed {
    return new SudokuGreed(this.arrayToRows(this.getResultWithAppliedDifficultyMask()));
  }

/*  private arrayToRows(arr: Array<any>): Array<Array<number>> {
    const result = SudokuUtils.GENERATE_ARRAY(GREED_SIZE, () => []);
    let row = 0;

    for (const [index, entry] of Array.from(arr.entries())) {
      result[row].push(entry);

      const isLastColumn = !((index + 1) % 9);
      if (isLastColumn) {
        row += 1;
      }
    }

    return result;
  }*/

  private arrayToRows(arr: Array<Cell>): Array<Array<Cell>> {
    const result = SudokuUtils.GENERATE_ARRAY(GREED_SIZE, () => []);
    let row = 0;

    for (const [index, entry] of Array.from(arr.entries())) {
      result[row].push(entry);

      const isLastColumn = !((index + 1) % 9);
      if (isLastColumn) {
        row += 1;
      }
    }

    return result;
  }

  private getResultWithAppliedDifficultyMask(): Array<Cell> {
    const getNonEmptyIndex = () => {
      const index = SudokuUtils.GENERATE_RANDOM_NUMBER(result.length);
      return result[index] ? index : getNonEmptyIndex();
    };

    const result = this.result.filter(() => true);

    while (result.length - this.difficulty > result.filter((c: Cell) => !c.isMasked).length) {
      const idx = getNonEmptyIndex();
      result[idx] = result[idx].setMasked();
    }

    return result;
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
        // this.result[index] = currentCandidate;
        this.result[index] = new Cell(currentCandidate);
        return true;
      }
    }

    return false;
  }
}
