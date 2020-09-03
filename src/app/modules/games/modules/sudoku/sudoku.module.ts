import {NgModule} from '@angular/core';
import {SudokuComponent} from './containers/sudoku-main/sudoku.component';
import {SudokuRoutingModule} from './sudoku-routing.module';

@NgModule({
  imports: [
    SudokuRoutingModule
  ],
  declarations: [
    SudokuComponent
  ],
  providers: [

  ]
})
export class SudokuModule {}
