export default function (cb) {
  if ('complete' === document.readyState) {
    cb();
  }

  document.addEventListener('DOMContentLoaded', cb);
}
