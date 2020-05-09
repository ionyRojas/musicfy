import { css } from '@emotion/core';
import { colors } from 'styles/colors';

export const wrapper = css({
  position: 'relative',
  height: '100%',
  backgroundColor: `${colors.white}`,
  boxShadow: `0 30px 80px ${colors.grey20}`,
  display: 'flex',
  justifyContent: 'space-between',
  flexDirection: 'column',
});

export const art = css({
  position: 'absolute',
  top: -40,
  width: 115,
  height: 115,
  marginLeft: 40,
  transform: 'rotateZ(0)',
  transition: '0.3s ease all',
  boxShadow: `0 0 0 10px ${colors.white}`,
  backgroundColor: `${colors.white}`,
  borderRadius: '50%',
  overflow: 'hidden',
});

export const controlsWrapper = css({
  marginRight: 5,
  alignSelf: 'flex-end',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100%',
});

export const control = css({
  padding: 25,
  backgroundColor: `${colors.white}`,
  cursor: 'pointer',
});
