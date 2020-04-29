import omit from 'lodash/fp/omit';
import React from 'react';
import PropTypes from 'prop-types';
import sanitizeHtml from 'sanitize-html';
import EmbedContainer from 'react-oembed-container';
import withThemes from '@irvingjs/styled/components/withThemes';
import { plainText, richText } from 'config/html';
import themeMap from './themes/themeMap';

const RawHTML = (props) => {
  const {
    className,
    content,
    rich,
    oembed,
    tag,
    theme,
  } = props;

  const {
    Wrapper,
  } = theme;

  // Allow <span> tags in rich text.
  richText.allowedTags.push('span');

  const html = sanitizeHtml(content, rich ? richText : plainText);

  const newProps = omit([
    'content',
    'rich',
    'children',
    'componentName',
    'oembed',
    'tag',
  ], props);

  if (oembed) {
    return (
      <EmbedContainer markup={content}>
        <div
          {...newProps}
          dangerouslySetInnerHTML={{ __html: html }} // eslint-disable-line react/no-danger
        />
      </EmbedContainer>
    );
  }

  return (
    <Wrapper
      as={tag}
      {...newProps}
      className={className}
      dangerouslySetInnerHTML={{ __html: html }} // eslint-disable-line react/no-danger
    />
  );
};

RawHTML.propTypes = {
  /**
   * The classname for the element
   */
  className: PropTypes.string,
  /**
   * HTML content to displayed using `dangerouslySetInnerHTML`
   */
  content: PropTypes.string.isRequired,
  /**
   * Is the content of this component Rich Text or Plain Text? This prop determines which configuration for sanitize-html will be used.
   */
  rich: PropTypes.bool,
  /**
   * Does this markup contain oembeds?
   */
  oembed: PropTypes.bool,
  /**
   * The html tag to use
   */
  tag: PropTypes.string,
  /**
   * Theme for the component.
   */
  theme: PropTypes.object,
};

RawHTML.defaultProps = {
  className: '',
  rich: true,
  oembed: false,
  tag: 'div',
  theme: {},
};

export default withThemes(themeMap)(RawHTML);
