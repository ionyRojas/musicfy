/** @jsx jsx */
import { jsx } from '@emotion/core';
import * as Styles from './index.styles';

function Tracker() {
  return (
    <div css={Styles.wrapper}>
      <p css={Styles.albumName}>Amanecer</p>
      <p css={Styles.trackName}>Bomba Estereo - To My Love</p>
      <div css={Styles.trackTime}>
        <span css={Styles.time}>00:31</span>
        <span css={Styles.time}>04:13</span>
      </div>
      <div css={Styles.progressBar} />
    </div>
  );
}

export default Tracker;
