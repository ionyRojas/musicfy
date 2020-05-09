/** @jsx jsx */
import { jsx } from '@emotion/core';
import { useContext } from 'react';
import * as Styles from './index.styles';
import AppContext from 'context/appContext';

/**
 * This track Component is rendering the information about the playing song
 * and the time information about the song
 */
function Track() {
  const { isPlaying } = useContext(AppContext);
  return (
    <div css={[Styles.Wrapper, isPlaying && Styles.Active]}>
      <p css={Styles.AlbumName}>Amanecer</p>
      <p css={Styles.TrackName}>Bomba Estereo - To My Love</p>
      <div css={Styles.TrackTime}>
        <span css={Styles.Time}>00:31</span>
        <span css={Styles.Time}>04:13</span>
      </div>
      <div css={Styles.ProgressBar} />
    </div>
  );
}

export default Track;
