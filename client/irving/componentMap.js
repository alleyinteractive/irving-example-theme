import createThemedComponentMap from '@irvingjs/styled-components/componentMap';
import AdminBar from '@irvingjs/wp-admin-bar';

// Integrations.
import { IntegrationsManager } from '@irvingjs/integrations';
import CoralTalkEmbed from 'components/coral';

// Icons.
import { FiSearch } from 'react-icons/fi';

// Themes.
import userThemes from './themes';

export default {
  ...createThemedComponentMap(userThemes),
  'irving-icon/search': FiSearch,
  'irving/admin-bar': AdminBar,
  'irving/coral': CoralTalkEmbed,
  'irving/integrations': IntegrationsManager,
};
