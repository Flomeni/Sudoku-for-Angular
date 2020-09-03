import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SudokuComponent} from './containers/sudoku-main/sudoku.component';

const ROUTES: Routes = [
  {
    path: '',
    component: SudokuComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(ROUTES),
  ],
  exports: [
    RouterModule
  ]
})
export class SudokuRoutingModule {}
