import React from 'react';
import PropTypes from 'prop-types';
import IrvingImg from './irvingImg';
import { Picture } from './styles';

const IrvingPicture = (props) => {
  const {
    aspectRatio,
    sourceTags,
    loaded,
    lazyload,
  } = props;

  return (
    <Picture
      loaded={loaded}
      lazyload={lazyload}
      aspectRatio={aspectRatio}
    >
      {sourceTags.map((source) => {
        const { srcset: sourceSrcset, media } = source;
        return (<source key={media} srcSet={sourceSrcset} media={media} />);
      })}
      <IrvingImg {...props} />
    </Picture>
  );
};

IrvingPicture.propTypes = {
  aspectRatio: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.bool,
    PropTypes.oneOf(['auto']),
  ]).isRequired,
  sourceTags: PropTypes.arrayOf(
    PropTypes.shape({
      srcset: PropTypes.string.isRequired,
      media: PropTypes.string.isRequired,
    })
  ).isRequired,
  loaded: PropTypes.bool.isRequired,
  lazyload: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.string,
  ]).isRequired,
};

export default IrvingPicture;
