import { css } from '@emotion/core';
import { colors } from 'styles/colors';

const wrapperLeftMargin = 15;

export const Wrapper = css({
  position: 'absolute',
  top: 0,
  transform: 'translateY(-0)',
  transition: '0.3s ease transform',
  padding: '13px 22px 10px 184px',
  marginLeft: wrapperLeftMargin,
  backgroundColor: colors.blue,
  width: `calc(100% - ${wrapperLeftMargin * 2}px)`,
  height: 92,
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
  marginBottom: 3,
  height: 12,
  overflow: 'hidden',
  display: 'flex',
  justifyContent: 'space-between',
});

export const Time = css({
  fontSize: 11,
  color: colors.blue40,
});

export const ProgressBar = css({
  backgroundColor: colors.blue80,
  cursor: 'pointer',
  position: 'relative',
  height: 4,
  borderRadius: 4,
});

export const Active = css({
  transform: 'translateY(-92px)',
});
