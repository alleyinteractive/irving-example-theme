import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Image } from './styles';

const IrvingImg = (props) => {
  const {
    alt,
    aspectRatio,
    sizes,
    src,
    srcset,
    onLoad,
    onError,
    loaded,
    lazyload,
  } = props;
  const imgRef = useRef(null);

  useEffect(() => {
    if (imgRef.current && imgRef.current.complete) {
      onLoad();
    }
  }, [imgRef.current]);

  return (
    <Image
      alt={alt}
      aspectRatio={aspectRatio}
      ref={imgRef}
      src={src}
      srcSet={srcset || null}
      sizes={sizes || null}
      onLoad={onLoad}
      onError={onError}
      loaded={loaded}
      lazyload={lazyload}
    />
  );
};

IrvingImg.propTypes = {
  aspectRatio: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.bool,
    PropTypes.oneOf(['auto']),
  ]).isRequired,
  srcset: PropTypes.string.isRequired,
  sizes: PropTypes.string,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  onLoad: PropTypes.func.isRequired,
  onError: PropTypes.func.isRequired,
  loaded: PropTypes.bool.isRequired,
  lazyload: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.string,
  ]).isRequired,
};

IrvingImg.defaultProps = {
  sizes: '',
};

export default IrvingImg;
