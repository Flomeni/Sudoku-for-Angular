import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {SudokuGreed} from '../../core/SudokuGreed';
import {Cell} from '../../core/Cell';

@Component({
  selector: 'sudoku-greed',
  templateUrl: 'sudoku-greed.component.html',
  styleUrls: ['sudoku-greed.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SudokuGreedComponent {
  @Input()
  board: SudokuGreed | null = null;

  constructor() {
  }

  public checkValidity(cell: Cell, target: any, row: number, col: number): void {
    this.board.cells[row][col] = cell.setNewValue(target.value);
  }
}
