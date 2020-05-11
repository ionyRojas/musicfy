import { css } from '@emotion/core';
import { colors } from 'styles/colors';

export const Wrapper = css({
  alignItems: 'center',
  display: 'flex',
  height: '100vh',
  justifyContent: 'center',
  position: 'relative',
});

export const Background = css({
  backgroundColor: colors.blue20,
  backgroundImage: `linear-gradient(160deg, ${colors.blue20} 0%, ${colors.green120} 100%)`,
  backgroundPosition: '50%',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  bottom: 0,
  filter: 'blur(40px)',
  left: 0,
  position: 'fixed',
  right: 0,
  top: 0,
  zIndex: 1,
  '&:after': {
    backgroundColor: `${colors.white}82`,
    content: '" "',
    height: '100%',
    left: 0,
    position: 'absolute',
    top: 0,
    width: '100%',
  },
});
