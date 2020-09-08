import {Cell} from './Cell';

export class SudokuGreed {

  constructor(private _cells: ReadonlyArray<ReadonlyArray<Cell>>,
              private _valid = true) {
  }


  get cells(): ReadonlyArray<ReadonlyArray<Cell>> {
    return this._cells;
  }

  get valid(): boolean {
    return this._valid;
  }

/*  public updateValidity(): SudokuGreed {
    const { _cells } = this;
    const isValid = [..._cells].some(c => c)
  }*/
}
