import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import withThemes from '@irvingjs/styled/components/withThemes';
import IrvingPicture from './irvingPicture';
import IrvingImg from './irvingImg';
import {
  Caption,
  Placeholder,
} from './styles';
import themeMap from './themes/themeMap';

const Image = (props) => {
  const {
    alt,
    aspectRatio,
    caption,
    className,
    lazyload,
    lqipSrc,
    picture,
    showCaption,
    theme,
  } = props;
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);
  const onLoad = () => setLoaded(true);
  const onError = () => setError(true);
  const WrapperElement = caption ? 'figure' : Fragment;
  const { Wrapper } = theme;

  // Set up image element(s) for maybe using with lazyload component
  const imageContent = (
    <>
      {picture ? (
        <IrvingPicture
          {...props}
          error={error}
          loaded={loaded}
          onLoad={onLoad}
          onError={onError}
        />
      ) : (
        <IrvingImg
          {...props}
          error={error}
          loaded={loaded}
          onLoad={onLoad}
          onError={onError}
        />
      )}
    </>
  );

  // Set up placeholder image with low quality image placeholder source
  const placeholder = lqipSrc ?
    (
      <Placeholder
        aspectRatio={aspectRatio}
        className="placeholder"
        lazyload={lazyload}
        loaded={loaded}
        src={lqipSrc}
        alt={alt}
      />
    ) :
    null;

  return (
    <WrapperElement>
      <Wrapper
        aspectRatio={aspectRatio}
        className={className}
        error={error}
      >
        {
          lazyload ?
            (
              <>
                {placeholder}
                {imageContent}
              </>
            ) :
            imageContent
        }
      </Wrapper>
      {(caption && showCaption) && <Caption>{caption}</Caption>}
    </WrapperElement>
  );
};

Image.propTypes = {
  /**
   * Alt text for the image
   */
  alt: PropTypes.string.isRequired,
  /**
   * Image aspect ratio. Used to apply intrinsic sizing CSS and
   * generate an appropriately sized placeholder for lazyloading.
   */
  aspectRatio: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.bool,
    PropTypes.oneOf(['auto']),
  ]).isRequired,
  /**
   * Whether or not to include default styles for an image with a static aspect ratio
   */
  aspectRatioStyles: PropTypes.bool,
  /**
   * Image caption. This prop will modify the image markup to use a <figure>.
   */
  caption: PropTypes.string,
  /**
   * Additional classname(s) to add to image wrapper element
   */
  className: PropTypes.string,
  /**
   * Height of image. Necessary for lazyloading placeholder.
   */
  height: PropTypes.number.isRequired,
  /**
   * Wether or not to lazyload this image via react-lazyload
   */
  lazyload: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.string,
  ]).isRequired,
  /**
   * Src attribute for Low Quality Image Placeholder (LQIP)
   */
  lqipSrc: PropTypes.string.isRequired,
  /**
   * Should this component render a `<picture>` element?
   */
  picture: PropTypes.bool,
  /**
   * Should the image caption be displayed?
   */
  showCaption: PropTypes.bool,
  /**
   * String with contents of <img> `sizes` attribute
   */
  sizes: PropTypes.string,
  /**
   * String with contents of <img> `src` attribute
   */
  src: PropTypes.string.isRequired,
  /**
   * String with contents of <img> `srcset` attribute
   */
  srcset: PropTypes.string.isRequired,
  /**
   * Theme (styles) to apply to the component.
   */
  theme: PropTypes.object.isRequired,
  /**
   * Array of objects containing values necessary for `<source>` tag attributes
   */
  sourceTags: PropTypes.arrayOf(
    PropTypes.shape({
      /**
       * String with contents of <source> `srcset` attribute
       */
      srcset: PropTypes.string.isRequired,
      /**
       * Media query for which this `<source>` tag's srcset should apply
       */
      media: PropTypes.string.isRequired,
    })
  ),
};

Image.defaultProps = {
  aspectRatioStyles: true,
  caption: '',
  className: '',
  sourceTags: [],
  picture: false,
  sizes: '',
  showCaption: false,
};

export default withThemes(themeMap)(Image);
