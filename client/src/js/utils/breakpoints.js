import config from '../../../config/breakpoints.json';

/**
 * Format global breakpoint values.
 * @see https://developer.mozilla.org/en-US/docs/Web/API/MediaQueryList
 *
 * @return {Object} An object of `key: MediaQueryList` pairs.
 */
function formatBreakpoints() {
  return Object.keys(config).reduce((acc, bp) => {
    const bpMinRems = `${config[bp] / 16}rem`;
    const bpMaxRems = `${(config[bp] - 1) / 16}rem`;

    acc[`${bp}Min`] = window.matchMedia(`(min-width: ${bpMinRems})`);
    acc[`${bp}Max`] = window.matchMedia(`(max-width: ${bpMaxRems})`);

    return acc;
  }, {});
}

const breakpoints = formatBreakpoints();
export default breakpoints;
