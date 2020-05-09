import { css } from '@emotion/core';
import { colors } from 'styles/colors';
import { hexToRgba } from 'utils/hexToRgba';

export const background = css({
  backgroundColor: `${colors.blue}`,
  backgroundImage: `linear-gradient(160deg, ${colors.blue} 0%, ${colors.green120} 100%)`,
  position: 'fixed',
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundPosition: '50%',
  filter: 'blur(40px)',
  zIndex: 1,
  '&:after': {
    content: '" "',
    width: '100%',
    height: '100%',
    backgroundColor: hexToRgba(`${colors.white}`, 0.51),
    position: 'absolute',
    top: 0,
    left: 0,
  },
});

export const content = css({
  zIndex: 2,
  position: 'relative',
});
