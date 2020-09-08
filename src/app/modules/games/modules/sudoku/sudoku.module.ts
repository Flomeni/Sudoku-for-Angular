import {NgModule} from '@angular/core';
import {SudokuComponent} from './containers/sudoku-main/sudoku.component';
import {SudokuRoutingModule} from './sudoku-routing.module';
import {SudokuGreedComponent} from './components/sudoku-greed/sudoku-greed.component';
import {CommonModule} from '@angular/common';
import {SudokuService} from './services/sudoku.service';
import {MatDialogModule} from '@angular/material/dialog';
import {SudokuDifficultyModalComponent} from './containers/sudoku-main/modal-dialogs/sudoku-difficulty-modal.component';
import {MatRadioModule} from '@angular/material/radio';
import {FormsModule} from '@angular/forms';

const ANGULAR_MODULES = [
  CommonModule,
  SudokuRoutingModule

];

const VENDOR_MODULES = [
  MatDialogModule,
  MatRadioModule
];

const DECLARATIONS = [
  SudokuComponent,
  SudokuGreedComponent,
  SudokuDifficultyModalComponent
];

@NgModule({
  imports: [
    ANGULAR_MODULES,
    VENDOR_MODULES,
    FormsModule
  ],
  declarations: [
    DECLARATIONS
  ],
  providers: [
    SudokuService
  ],
  entryComponents: [
    SudokuDifficultyModalComponent
  ]
})
export class SudokuModule {}
