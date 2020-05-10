/** @jsx jsx */
import { jsx } from '@emotion/core';
import { useContext, useCallback } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import {
  faBackward,
  faForward,
  faPlay,
  faPause,
} from '@fortawesome/free-solid-svg-icons';
import * as Styles from './index.styles';
import AppContext from 'context/appContext';

/**
 * This function is rendering the component that containt the image and the controls
 */
function Content({ audioEl }) {
  const { appState, TRACK_STATES, actions } = useContext(AppContext);
  const { trackPosition, tracks, trackState, currentTrack } = appState;
  const { setTrackPosition } = actions;
  const isPlaying = trackState === TRACK_STATES.PLAYING;

  /**
   * @param  {} (
   */
  const handlePlayButton = useCallback(() => {
    const { current: audio } = audioEl;
    if (audio.paused) {
      audio.play();
    } else {
      audio.pause();
    }
  }, [audioEl]);

  /**
   * @param  {} (
   */
  const handleBackwardButton = useCallback(() => {
    const nextTrackPosition = trackPosition - 1;

    setTrackPosition(
      nextTrackPosition < 0 ? tracks.length - 1 : nextTrackPosition,
    );
  }, [tracks, trackPosition]);

  /**
   * @param  {} (
   */
  const handleForwardButton = useCallback(() => {
    const nextTrackPosition = trackPosition + 1;

    setTrackPosition(
      nextTrackPosition >= tracks.length ? 0 : nextTrackPosition,
    );
  }, [tracks, trackPosition]);

  return (
    <div css={Styles.Wrapper}>
      <span css={Styles.Art(isPlaying)}>
        <img
          css={[Styles.ImageArt, isPlaying && Styles.RotateImage]}
          src={currentTrack.imageUrl}
          alt={currentTrack.name}
        />
      </span>
      <div css={Styles.ControlsWrapper}>
        <span css={Styles.Control} onClick={handleBackwardButton}>
          <FontAwesomeIcon icon={faBackward} />
        </span>
        <span css={Styles.Control} onClick={handlePlayButton}>
          {isPlaying ? (
            <FontAwesomeIcon icon={faPause} />
          ) : (
            <FontAwesomeIcon icon={faPlay} />
          )}
        </span>
        <span css={Styles.Control} onClick={handleForwardButton}>
          <FontAwesomeIcon icon={faForward} />
        </span>
      </div>
    </div>
  );
}

Content.propTypes = {
  audioEl: PropTypes.object.isRequired,
};

export default Content;
