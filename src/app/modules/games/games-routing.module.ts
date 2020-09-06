import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {GamesComponent} from './games.component';

const ROUTES: Routes = [
  {
    /**
     * @description
     * Here had to be parent router config with container component that holds navigation to childern games and router-outlet view anchor,
     * but i'm skipping all these features instantly redirecting to specific game - sudoku.
     */
 /* {
      path: '',
      component: GamesComponent,
      children: [
          {
            path: 'sudoku',
            loadChildren: () => import('./modules/sudoku/sudoku.module').then(m => m.SudokuModule)
          }
      ]
    }
  */
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
