import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const ROUTES: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'sudoku'
  },
  {
    path: 'sudoku',
    loadChildren: () => import('./modules/sudoku/sudoku.module').then(m => m.SudokuModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(ROUTES),
  ],
  exports: [RouterModule]
})
export class GamesRoutingModule {}
