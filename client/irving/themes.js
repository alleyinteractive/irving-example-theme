// Menu
import * as headerDefaultMenu from './components/menu/headerDefault';

// Text
import * as textHeading from './components/text/heading';
import * as textSubheading from './components/text/subheading';
import * as buttonDesign from './components/button/design';
import * as buttonGreen from './components/button/green';

export default {
  'irving/button': {
    design: buttonDesign,
    green: buttonGreen,
  },
  'irving/menu': {
    headerDefault: headerDefaultMenu,
  },
  'irving/text': {
    heading: textHeading,
    subheading: textSubheading,
  },
};
