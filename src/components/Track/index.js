/** @jsx jsx */
import { jsx } from '@emotion/core';
import { useContext, useCallback, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import * as Styles from './index.styles';
import AppContext from 'context/appContext';
import formatTime from 'utils/formatTime';

/**
 * This track Component is rendering the information about the playing song
 * and the time information about the song
 */
function Track({ totalTime, currentTime, audioEl, setCurrentTime }) {
  const { totalFormatTime, totalTimeInSeconds } = totalTime;
  const { currentFormatTime, currentTimeInSeconds } = currentTime;
  const { appState, TRACK_STATES } = useContext(AppContext);
  const { currentTrack } = appState;
  const [hoverTime, setHoveredTime] = useState({ formatTime: '', time: 0 });
  const [showTooltip, setShowTooltip] = useState(false);
  const [leftPosition, setLeftPosition] = useState(0);
  const progressBar = useRef(null);

  const barProgress = (currentTimeInSeconds * 100) / totalTimeInSeconds;
  const isPlaying = appState.trackState === TRACK_STATES.PLAYING;

  const handleOnMouseMove = useCallback(
    (event) => {
      const mousePosition =
        event.clientX - progressBar.current.getBoundingClientRect().left;
      const positionInPercentaje =
        (mousePosition / progressBar.current.getBoundingClientRect().width) *
        100;
      const positionInTime = (positionInPercentaje * totalTimeInSeconds) / 100;
      const formatedCurrentMousePosition = formatTime(positionInTime);
      setLeftPosition(mousePosition);
      setHoveredTime({
        formatTime: formatedCurrentMousePosition,
        time: positionInTime,
      });
    },
    [totalTimeInSeconds],
  );

  const handleOnMouseEnter = useCallback(() => {
    setShowTooltip(true);
  }, []);

  const handleOnMouseLeave = useCallback(() => {
    setShowTooltip(false);
  }, []);

  const handleOnClick = useCallback(() => {
    setCurrentTime({
      currentFormatTime: hoverTime.formatTime,
      currentTimeInSeconds: hoverTime.time,
    });
    audioEl.current.currentTime = hoverTime.time;
  }, [hoverTime, setCurrentTime, audioEl]);

  return (
    <div css={[Styles.Wrapper, isPlaying && Styles.Active]}>
      <p css={Styles.AlbumName}>{currentTrack.albums}</p>
      <p css={Styles.TrackName}>{currentTrack.name}</p>
      <div css={Styles.TrackTime}>
        <span css={Styles.Time}>{currentFormatTime}</span>
        <span css={Styles.Time}>{totalFormatTime}</span>
        {showTooltip && (
          <span css={Styles.HoverElement(leftPosition)}>
            {hoverTime.formatTime}
          </span>
        )}
      </div>
      <div
        css={Styles.ProgressBarWrapper}
        onClick={handleOnClick}
        onMouseEnter={handleOnMouseEnter}
        onMouseLeave={handleOnMouseLeave}
        onMouseMove={handleOnMouseMove}
        ref={progressBar}
      >
        <div css={[Styles.ProgressBar(barProgress)]}>
          <p>s</p>
        </div>
      </div>
    </div>
  );
}

Track.defaultProps = {
  setCurrentTime: () => {},
};

Track.propTypes = {
  setCurrentTime: PropTypes.func,
  totalTime: PropTypes.shape({
    totalFormatTime: PropTypes.string.isRequired,
    totalTimeInSeconds: PropTypes.number.isRequired,
  }).isRequired,
  currentTime: PropTypes.shape({
    currentFormatTime: PropTypes.string.isRequired,
    currentTimeInSeconds: PropTypes.number.isRequired,
  }).isRequired,
  audioEl: PropTypes.object.isRequired,
};

export default Track;
