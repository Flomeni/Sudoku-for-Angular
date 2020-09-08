import {Injectable} from '@angular/core';
import {Sudoku} from '../core/Sudoku';
import {BehaviorSubject, Observable, of} from 'rxjs';
import {Difficulty, DifficultyCode} from '../core/Difficulty';
import {SudokuGreed} from '../core/SudokuGreed';

@Injectable()
export class SudokuService {

  private difficulty = new BehaviorSubject<Difficulty>(Difficulty.create(DifficultyCode.easy));

  constructor() {}

  public getGreed(): Observable<SudokuGreed> {
    const updatedMaskForDifficulty = Difficulty.create(this.difficulty.getValue().code);

    return of(Sudoku.createSolution(updatedMaskForDifficulty.mask));
  }

  public setDifficulty(code: DifficultyCode): void {
    this.difficulty.next(Difficulty.create(code));
  }
}
