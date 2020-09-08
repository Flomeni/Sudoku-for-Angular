import {Component, EventEmitter, OnDestroy} from '@angular/core';
import {Difficulty, DifficultyCode} from '../../../core/Difficulty';
import {MatDialogRef} from '@angular/material/dialog';
import {SudokuService} from '../../../services/sudoku.service';
import {takeUntil} from 'rxjs/operators';

export interface SudokuDifficultyModalResult {
  difficulty: Difficulty;
  canceled: boolean;
}

@Component({
  templateUrl: 'sudoku-difficulty-modal.component.html',
  styleUrls: ['sudoku-difficulty-modal.component.less']
})
export class SudokuDifficultyModalComponent implements OnDestroy {

  public difficulties = [
    Difficulty.create(DifficultyCode.easy),
    Difficulty.create(DifficultyCode.medium),
    Difficulty.create(DifficultyCode.hard)
  ];

  public difficulty = this.difficulties[0];

  private destroyed$ = new EventEmitter<void>();

  constructor(private dialogRef: MatDialogRef<SudokuDifficultyModalComponent, SudokuDifficultyModalResult>,
              private sudokuService: SudokuService) {
    sudokuService.difficulty$
      .pipe(takeUntil(this.destroyed$))
      .subscribe((d: Difficulty) => {
        this.difficulty = d;
        console.log(d);
      });
  }

  ngOnDestroy(): void {
    this.destroyed$.emit();
  }

  public closeWithCancel(): void {
    this.close(true);
  }

  public closeWithResult(): void {
    this.close(false);
  }

  private close(canceled: boolean): void {
    this.dialogRef.close({
      difficulty: this.difficulty,
      canceled
    });
  }
}
