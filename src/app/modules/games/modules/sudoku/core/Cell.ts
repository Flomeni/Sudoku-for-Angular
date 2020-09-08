export class Cell {
  constructor(private _value: number,
              private _isMasked = false,
              private _valid = true) {
  }

  get value(): number {
    return this._value;
  }

  get valid(): boolean {
    return this._valid;
  }

  get isMasked(): boolean {
    return this._isMasked;
  }

  public setValue(value: number): Cell {
    return new Cell(value, this._isMasked);
  }

  public setMasked(): Cell {
    return new Cell(this._value, true);
  }

  public toggleMask(): Cell {
    return new Cell(this._value, !this._isMasked);
  }
}
