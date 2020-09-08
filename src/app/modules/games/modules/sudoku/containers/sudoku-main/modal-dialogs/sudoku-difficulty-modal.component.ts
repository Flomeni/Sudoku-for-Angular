import {Component} from '@angular/core';
import {Difficulty, DifficultyCode} from '../../../core/Difficulty';

@Component({
  templateUrl: 'sudoku-difficulty-modal.component.html',
  styleUrls: ['sudoku-difficulty-modal.component.less']
})
export class SudokuDifficultyModalComponent {

  public difficulty = Difficulty.create(DifficultyCode.easy);

  public difficulties = [
    Difficulty.create(DifficultyCode.easy),
    Difficulty.create(DifficultyCode.medium),
    Difficulty.create(DifficultyCode.hard)
  ];
}
