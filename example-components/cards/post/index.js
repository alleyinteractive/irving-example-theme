import React from 'react';
import PropTypes from 'prop-types';
import Link from '../../elements/link';

const PostCard = (props) => {
  const {
    title,
    link,
  } = props;

  return (
    <div>
      <h3><Link to={link}>{title}</Link></h3>
    </div>
  );
};

PostCard.propTypes = {
  /**
   * Post title.
   */
  title: PropTypes.string,
  /**
   * Post link.
   */
  link: PropTypes.string,
};

PostCard.defaultProps = {
  title: '',
  link: '',
};

export default PostCard;
