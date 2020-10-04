import createThemedComponentMap from '@irvingjs/styled-components/componentMap';
import AdminBar from '@irvingjs/wp-admin-bar';

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
}

export default {
  ...createThemedComponentMap(themes),
  ...iconComponentMap,
  'irving/admin-bar': AdminBar,
  'irving/coral': CoralTalkEmbed,
  'irving/integrations': IntegrationsManager,
};
