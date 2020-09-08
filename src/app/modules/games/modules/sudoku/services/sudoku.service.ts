import {Injectable} from '@angular/core';
import {Sudoku} from '../core/Sudoku';
import {BehaviorSubject, Observable, of} from 'rxjs';
import {Difficulty, DifficultyCode} from '../core/Difficulty';
import {SudokuGreed} from '../core/SudokuGreed';
import {switchMap, tap} from 'rxjs/operators';
import {Cell} from '../core/Cell';
import {GREED_SIZE, SudokuUtils} from '../core/SudokuUtils';

@Injectable()
export class SudokuService {

  private difficulty = new BehaviorSubject<Difficulty>(Difficulty.create(DifficultyCode.easy));
  public difficulty$: Observable<Difficulty> = this.difficulty.asObservable();

  public board$: Observable<SudokuGreed> = this.difficulty$.pipe(
    switchMap((difficulty: Difficulty) => of(this.createSolution(difficulty))),
    tap((solution: SudokuGreed) => console.log(solution.cells))
  );

  constructor() {}

  public setDifficulty(code: DifficultyCode): void {
    this.difficulty.next(Difficulty.create(code));
  }

  private createSolution(difficulty: Difficulty): SudokuGreed {
    const solvedSudoku = Sudoku.createSolution();
    const cells: Array<Cell> = solvedSudoku.result.map(item => new Cell(item));

    return this.getPreparedBoard(cells, difficulty.mask);
  }

  private getPreparedBoard(cells: Array<Cell>, mask: number): SudokuGreed {
    return new SudokuGreed(this.arrayToRows(this.applyDifficultyMask(cells, mask)));
  }

  private applyDifficultyMask(cells: Cell[],
                              difficultyMask: number): Array<Cell> {
    const getNonEmptyIndex = () => {
      const index = SudokuUtils.GENERATE_RANDOM_NUMBER(result.length);
      return result[index].isMasked ? getNonEmptyIndex() : index;
    };

    const result = cells.filter(() => true);
    for (let len = result.length - difficultyMask; len; len--) {
      const idx = getNonEmptyIndex();
      result[idx] = result[idx].setMasked();
    }

    return result;
  }

/*  private applyDifficultyMask(solvedSudoku: number[],
                              difficultyMask: number): Array<Cell> {
    const getNonEmptyIndex = () => {
      const index = SudokuUtils.GENERATE_RANDOM_NUMBER(result.length);
      return result[index] ? index : getNonEmptyIndex();
    };

    const result = solvedSudoku.filter(() => true);

    while (result.length - difficultyMask > result.filter((c: Cell) => !c.isMasked).length) {
      const idx = getNonEmptyIndex();
      result[idx] = result[idx].setMasked();
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
}
