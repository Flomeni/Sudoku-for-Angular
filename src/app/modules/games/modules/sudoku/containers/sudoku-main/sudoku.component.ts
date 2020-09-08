import {Component} from '@angular/core';
import {SudokuService} from '../../services/sudoku.service';
import {MatDialog} from '@angular/material/dialog';
import {SudokuDifficultyModalComponent, SudokuDifficultyModalResult} from './modal-dialogs/sudoku-difficulty-modal.component';

@Component({
  templateUrl: './sudoku.component.html',
  styleUrls: ['./sudoku.component.less']
})
export class SudokuComponent {

  public board$ = this.sudokuService.board$;

  constructor(private sudokuService: SudokuService,
              private matDialog: MatDialog) {}

  public onCreateNewPuzzle(): void {
    this.matDialog.open<SudokuDifficultyModalComponent, void, SudokuDifficultyModalResult>(SudokuDifficultyModalComponent, {
      hasBackdrop: true,
      width: '1029px',
      height: '761px'
    }).afterClosed().subscribe((result) => {
      if (result.canceled) {
        return;
      }

      this.sudokuService.setDifficulty(result.difficulty.code);
    });

  }
}
