import {GREED_SIZE, SudokuUtils} from './SudokuUtils';

const MASK_REDUCER = (begin: number,
                      end: number,
                      iterations: number) => {
  if (iterations === 1) {
    return SudokuUtils.RANDOM_INT_IN_RANGE(begin, end);
  }
  return SudokuUtils.RANDOM_INT_IN_RANGE(begin, end) + MASK_REDUCER(begin, end, iterations - 1);
};

const GET_EASY_MASK = () => MASK_REDUCER(3, 5, GREED_SIZE);
const GET_MEDIUM_MASK = () => MASK_REDUCER(2, 4, GREED_SIZE);
const GET_HARD_MASK = () => MASK_REDUCER(1, 3, GREED_SIZE);

export enum DifficultyCode {
  easy,
  medium,
  hard
}

export class Difficulty {
  public static create(code: DifficultyCode): Difficulty {
    switch (code) {
      case DifficultyCode.easy:
        return new Difficulty(code, GET_EASY_MASK(), 'Easy, 3-5 prefilled numbers');
      case DifficultyCode.medium:
        return new Difficulty(code, GET_MEDIUM_MASK(), ' Medium, 3-4 prefilled numbers');
      case DifficultyCode.hard:
        return new Difficulty(code, GET_HARD_MASK(), 'Hard — 1-3 prefilled numbers');
      default:
        throw new Error(`Unknown difficulty code: ${code}.`);
    }
  }

  private constructor(readonly code: DifficultyCode,
                      readonly mask: number,
                      readonly desc: string) {}
}
