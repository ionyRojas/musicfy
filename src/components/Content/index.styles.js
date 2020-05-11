import { css, keyframes } from '@emotion/core';
import { colors } from 'styles/colors';

export const Wrapper = css({
  backgroundColor: colors.white,
  boxShadow: `0 30px 80px ${colors.grey20}`,
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  justifyContent: 'space-between',
  position: 'relative',
});

export const Art = (isPlaying) =>
  css({
    backgroundImage: 'linear-gradient(160deg,#0093E9 0%,#80D0C7 100%)',
    borderRadius: '50%',
    boxShadow: isPlaying
      ? '0 0 0 4px #fff7f7, 0 30px 50px -15px #afb7c1'
      : `0 0 0 10px ${colors.white}`,
    height: 115,
    marginLeft: 40,
    overflow: 'hidden',
    position: 'absolute',
    transform: `translateY(${isPlaying ? '-60px' : '-40px'})`,
    transition: '0.3s ease all',
    width: 115,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  });

export const BufferText = css({
  position: 'absolute',
  fontSize: 13,
  backgroundColor: 'rgba(255, 255, 255, 0.19)',
  width: '100%',
  textAlign: 'center',
  fontWeight: 'bold',
  zIndex: 1,
  padding: 6,
});

export const ControlsWrapper = css({
  alignItems: 'center',
  alignSelf: 'flex-end',
  display: 'flex',
  height: '100%',
  justifyContent: 'center',
  marginRight: 5,
});

export const Control = css({
  backgroundColor: colors.white,
  color: colors.blue120,
  cursor: 'pointer',
  fontSize: 25,
  padding: 25,
  '&:hover': {
    backgroundColor: colors.blue100,
    color: colors.white,
  },
});

export const ImageArt = css({
  width: '100%',
});

const rotateAlbumArt = keyframes({
  '0%': {
    transform: 'rotateZ(0)',
  },
  '100%': {
    transform: 'rotateZ(360deg)',
  },
});

export const RotateImage = css({
  animation: `${rotateAlbumArt} 3s linear 0s infinite forwards`,
});
