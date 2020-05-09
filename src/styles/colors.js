export const colors = {
  blue: '#003f63',
  blue20: '#0093E9',
  blue40: '#009dfb',
  blue60: '#04a1fb',
  blue80: '#d7f0ff',
  green120: '#80D0C7',
  grey: '#acaebd',
  grey20: '#656565',
  white: '#ffffff',
};

export const keyColors = Object.keys(colors).reduce((accum, current) => {
  return { ...accum, [current]: current };
}, {});
