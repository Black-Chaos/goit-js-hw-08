export function onThrottle(cb, t) {
  let on = 1;
  return obj => {
    if (on) {
      on = 0;
      cb(obj);
      setTimeout(() => (on = 1), t);
    }
  };
}