import { css } from '@emotion/core';
import { colors } from 'styles/colors';

const wrapperLeftMargin = 15;

export const Wrapper = css({
  backgroundColor: colors.blue,
  height: 92,
  marginLeft: wrapperLeftMargin,
  padding: '13px 22px 10px 184px',
  position: 'absolute',
  top: 0,
  transform: 'translateY(-0)',
  transition: 'transform 0.3s ease',
  width: `calc(100% - ${wrapperLeftMargin * 2}px)`,
});

export const AlbumName = css({
  color: colors.blue60,
  fontSize: 17,
  fontWeight: 'bold',
});

export const TrackName = css({
  color: colors.grey,
  fontSize: 13,
  margin: '2px 0 13px 0',
});

export const TrackTime = css({
  display: 'flex',
  height: 12,
  justifyContent: 'space-between',
  marginBottom: 3,
  position: 'relative',
});

export const Time = css({
  color: colors.blue40,
  fontSize: 11,
});

export const ProgressBarWrapper = css({
  backgroundColor: colors.blue80,
  borderRadius: 4,
  cursor: 'pointer',
  height: 4,
  overflow: 'hidden',
});

export const ProgressBar = (barProgress) =>
  css({
    backgroundColor: colors.blue60,
    borderRadius: 4,
    height: 4,
    transform: `translateX(calc(-100% + ${barProgress}%))`,
    width: '100%',
  });

export const Circle = (barProgress) =>
  css({
    backgroundColor: colors.blue60,
    borderRadius: '50%',
    height: 30,
    transform: `translateX(calc(-50% + ${barProgress}%))`,
    width: 30,
  });

export const Active = css({
  transform: 'translateY(-92px)',
  transition: 'transform 0.3s ease 0s',
});

export const HoverElement = (leftPosition) =>
  css({
    backgroundColor: colors.grey40,
    borderRadius: 4,
    color: colors.white,
    fontSize: 12,
    left: 0,
    padding: '5px 6px',
    position: 'absolute',
    top: -12,
    transform: `translateX(calc(-50% + ${leftPosition}px))`,
  });
