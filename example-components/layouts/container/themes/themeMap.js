import * as contentWidthStyles from './contentWidth';
import * as contentWidthPaddedStyles from './contentWidthPadded';
import * as fullWidthStyles from './fullWidth';
import * as fullBleedStyles from './fullBleed';
import * as fullBleedBgImageStyles from './fullBleedBgImage';
import * as grayStyles from './gray';
import * as paddedStyles from './padded';
import * as wideStyles from './wideWidth';

const themeMap = {
  default: fullWidthStyles,
  contentWidth: contentWidthStyles,
  contentWidthPadded: contentWidthPaddedStyles,
  fullWidth: fullWidthStyles,
  fullBleed: fullBleedStyles,
  fullBleedBgImage: fullBleedBgImageStyles,
  gray: grayStyles,
  padded: paddedStyles,
  wideWidth: wideStyles,
};

export default themeMap;
