import {Cell} from './Cell';

export class SudokuGreed {

  constructor(private _cells: Array<Array<Cell>>,
              private _valid = true) {
  }


  get cells(): Array<Array<Cell>> {
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
