import { css } from '@emotion/core';
import { colors } from 'styles/colors';

const wrapperLeftMargin = 15;

export const wrapper = css({
  position: 'absolute',
  top: 0,
  transform: 'translateY(-92px)',
  padding: '13px 22px 10px 184px',
  marginLeft: wrapperLeftMargin,
  backgroundColor: `${colors.blue}`,
  width: `calc(100% - ${wrapperLeftMargin * 2}px)`,
  height: 92,
});

export const albumName = css({
  color: `${colors.blue60}`,
  fontSize: 17,
  fontWeight: 'bold',
});

export const trackName = css({
  color: `${colors.grey}`,
  fontSize: 13,
  margin: '2px 0 13px 0',
});

export const trackTime = css({
  marginBottom: 3,
  height: 12,
  overflow: 'hidden',
  display: 'flex',
  justifyContent: 'space-between',
});

export const time = css({
  fontSize: 11,
  color: `${colors.blue40}`,
});

export const progressBar = css({
  backgroundColor: `${colors.blue80}`,
  cursor: 'pointer',
  position: 'relative',
  height: 4,
  borderRadius: 4,
});
