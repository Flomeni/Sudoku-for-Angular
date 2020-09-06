import {NgModule} from '@angular/core';
import {GamesRoutingModule} from './games-routing.module';
import {GamesComponent} from './games.component';

const ANGULAR_MODULES = [
  GamesRoutingModule
];

const DECLARATIONS = [
  GamesComponent
];

const FEATURE_MODULES = [

];

const PROVIDERS = [

];

@NgModule({
  imports: [
    ...ANGULAR_MODULES,
    ...FEATURE_MODULES
  ],
  declarations: [
    ...DECLARATIONS
  ],
  providers: [
    ...PROVIDERS
  ]
})
export class GamesModule {}
