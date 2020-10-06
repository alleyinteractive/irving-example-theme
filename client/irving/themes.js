// Byline
import * as singleByline from './components/byline/single';

// Container
import * as singleContentContainer from './components/container/singleContent';
import * as singleMetaContainer from './components/container/singleMeta';

// Image
import * as singleImage from './components/image/single';

// Menu
import * as footerDefaultMenu from './components/menu/footerDefault';
import * as headerDefaultMenu from './components/menu/headerDefault';

// Social Sharing
import * as defaultSocialSharing from './components/socialSharing/default';

// Text
import * as textHeading from './components/text/heading';
import * as textSubheading from './components/text/subheading';

export default {
  'irving/byline': {
    single: singleByline,
  },
  'irving/container': {
    singleContent: singleContentContainer,
    singleMeta: singleMetaContainer,
  },
  'irving/image': {
    single: singleImage,
  },
  'irving/menu': {
    footerDefault: footerDefaultMenu,
    headerDefault: headerDefaultMenu,
  },
  'irving/social-sharing': {
    default: defaultSocialSharing,
  },
  'irving/text': {
    heading: textHeading,
    subheading: textSubheading,
  },
};
