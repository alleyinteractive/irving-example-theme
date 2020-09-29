import createThemedComponentMap from '@irvingjs/styled-components/componentMap';
import AdminBar from '@irvingjs/wp-admin-bar';

// Integrations.
import { IntegrationsManager } from '@irvingjs/integrations';
import CoralTalkEmbed from 'components/coral';

// Icons.
import { FiSearch } from 'react-icons/fi';

// Themes.
import themes from 'themes.js';

export default {
  ...createThemedComponentMap(themes),
  'irving-icon/search': FiSearch,
  'irving/admin-bar': AdminBar,
  'irving/coral': CoralTalkEmbed,
  'irving/integrations': IntegrationsManager,
};
