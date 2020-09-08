import {Component, Input} from '@angular/core';
import {SudokuGreed} from '../../core/SudokuGreed';

@Component({
  selector: 'sudoku-greed',
  templateUrl: 'sudoku-greed.component.html',
  styleUrls: ['sudoku-greed.component.less']
})
export class SudokuGreedComponent {

  @Input() board: SudokuGreed | null = null;

}
