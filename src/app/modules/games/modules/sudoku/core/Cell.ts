export class Cell {

  constructor(private _initialValue: number,
              private _isMasked = false,
              private _valid = true,
              private _maskedValue = '') {
  }

  get initialValue(): number {
    return this._initialValue;
  }

  get maskedValue(): string {
    return this._maskedValue;
  }

  set maskedValue(value: string) {
    this._maskedValue = value;
  }

  get valid(): boolean {
    return this._valid;
  }

  set valid(state: boolean) {
    this._valid = state;
  }

  get isMasked(): boolean {
    return this._isMasked;
  }

  public setNewValue(value: string): Cell {
    const valid = (value === this._initialValue.toString());
    return new Cell(this._initialValue, this._isMasked, valid, value);
  }

  public setMasked(): Cell {
    return new Cell(this._initialValue, true);
  }

  public toggleMask(): Cell {
    return new Cell(this._initialValue, !this._isMasked);
  }
}
