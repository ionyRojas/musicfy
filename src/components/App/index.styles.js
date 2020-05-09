import { css } from '@emotion/core';
import { colors } from 'styles/colors';
import { hexToRgba } from 'utils/hexToRgba';

export const Wrapper = css({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
  position: 'relative',
});

export const Background = css({
  backgroundColor: colors.blue20,
  backgroundImage: `linear-gradient(160deg, ${colors.blue20} 0%, ${colors.green120} 100%)`,
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
    backgroundColor: hexToRgba(colors.white, 0.51),
    position: 'absolute',
    top: 0,
    left: 0,
  },
});
