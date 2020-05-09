import { css } from '@emotion/core';
import { colors } from 'styles/colors';

export const Wrapper = css({
  position: 'relative',
  height: '100%',
  backgroundColor: colors.white,
  boxShadow: `0 30px 80px ${colors.grey20}`,
  display: 'flex',
  justifyContent: 'space-between',
  flexDirection: 'column',
});

export const Art = (isPlaying) =>
  css({
    position: 'absolute',
    transform: `translateY(${isPlaying ? '-60px' : '-40px'})`,
    width: 115,
    height: 115,
    marginLeft: 40,
    transition: '0.3s ease all',
    boxShadow: isPlaying
      ? '0 0 0 4px #fff7f7, 0 30px 50px -15px #afb7c1'
      : `0 0 0 10px ${colors.white}`,
    // backgroundColor: colors.white,
    backgroundImage: 'linear-gradient(160deg,#0093E9 0%,#80D0C7 100%)',
    borderRadius: '50%',
    overflow: 'hidden',
  });

export const ArtActive = css({});

export const ControlsWrapper = css({
  marginRight: 5,
  alignSelf: 'flex-end',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100%',
});

export const Control = css({
  padding: 25,
  backgroundColor: colors.white,
  cursor: 'pointer',
  fontSize: 25,
  color: colors.blue120,
  '&:hover': {
    color: colors.white,
    backgroundColor: colors.blue100,
  },
});
