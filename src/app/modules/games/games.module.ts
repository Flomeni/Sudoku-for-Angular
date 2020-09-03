import {NgModule} from '@angular/core';
import {GamesRoutingModule} from './games-routing.module';

const ANGULAR_MODULES = [
  GamesRoutingModule
];

const DECLARATIONS = [

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
