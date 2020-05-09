export const colors = {
  blue: '#0093E9',
  green120: '#80D0C7',
  white: '#ffffff',
};

export const keyColors = Object.keys(colors).reduce((accum, current) => {
  return { ...accum, [current]: current };
}, {});
