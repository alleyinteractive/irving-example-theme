import createThemedComponentMap from '@irvingjs/styled-components/componentMap';
import AdminBar from '@irvingjs/wp-admin-bar';

// Components.
import BodyWrapper from 'components/bodyWrapper';

// Integrations.
import { IntegrationsManager } from '@irvingjs/integrations';
import CoralTalkEmbed from 'components/coral';

// Icons.
import {
  FiCalendar,
  FiMenu,
  FiSearch,
  FiUser,
} from 'react-icons/fi';

// Themes.
import themes from 'themes.js';

const iconComponentMap = {
  'irving/calendar-icon': FiCalendar,
  'irving/menu-icon': FiMenu,
  'irving/search-icon': FiSearch,
  'irving/user-icon': FiUser,
};

export default {
  ...createThemedComponentMap(themes),
  ...iconComponentMap,
  'irving/admin-bar': AdminBar,
  'irving/body-wrapper': BodyWrapper,
  'irving/coral': CoralTalkEmbed,
  'irving/integrations': IntegrationsManager,
};
