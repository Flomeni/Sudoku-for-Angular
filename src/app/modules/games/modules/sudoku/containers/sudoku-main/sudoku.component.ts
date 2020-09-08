import {Component} from '@angular/core';
import {SudokuService} from '../../services/sudoku.service';
import {MatDialog} from '@angular/material/dialog';
import {SudokuDifficultyModalComponent} from './modal-dialogs/sudoku-difficulty-modal.component';

@Component({
  templateUrl: './sudoku.component.html',
  styleUrls: ['./sudoku.component.less']
})
export class SudokuComponent {

  public board$ = this.sudokuService.getGreed();

  constructor(private sudokuService: SudokuService,
              private matDialog: MatDialog) {}

  public onCreateNewPuzzle(): void {
    this.matDialog.open(SudokuDifficultyModalComponent, {
      hasBackdrop: true,
      width: '1029px',
      height: '761px'
    });
    this.board$ = this.sudokuService.getGreed();
  }
}
