import ComponentMap from '@irvingjs/styled-components';
import AdminBar from '@irvingjs/wp-admin-bar';
import CoralTalkEmbed from 'components/coral';
import { FiSearch } from 'react-icons/fi';
import userThemes from './themes';

export default {
  ...ComponentMap(userThemes),
  'irving/admin-bar': AdminBar,
  'irving-icon/search': FiSearch,
  'irving/coral': CoralTalkEmbed,
};
