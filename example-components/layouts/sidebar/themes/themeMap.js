import * as ThreeFourthsStyles from './contentThreeFourths';
import * as ThreeFourthsReversedStyles from './contentThreeFourthsReversed';
import * as TwoThirdsStyles from './contentTwoThirds';
import * as TwoThirdsReversedStyles from './contentTwoThirdsReversed';
import * as HalfAndHalfStyles from './contentHalfAndHalf';

const themeMap = {
  default: TwoThirdsStyles,
  contentThreeFourths: ThreeFourthsStyles,
  contentThreeFourthsReversed: ThreeFourthsReversedStyles,
  contentTwoThirds: TwoThirdsStyles,
  contentTwoThirdsReversed: TwoThirdsReversedStyles,
  contentHalfAndHalf: HalfAndHalfStyles,
};

export default themeMap;
