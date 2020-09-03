import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PageNotFoundComponent} from './components/page-not-found-component/page-not-found.component';

const ROUTERS: Routes = [
  /**
   * Guarded components to check user access, browser compatibility etc
   */
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'games'
  },
  {
    path: 'games',
    loadChildren: () => import('./modules/games/games.module').then(m => m.GamesModule)
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(ROUTERS)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
