/** @jsx jsx */
import { jsx } from '@emotion/core';
import { useRef, useEffect, useCallback, useContext, useState } from 'react';
import Track from 'components/Track';
import Content from 'components/Content';
import * as Styles from './index.styles';
import { getTracks } from 'utils/urls';
import formatTime from 'utils/formatTime';
import AppContext from 'context/appContext';

/**
 * Wrapper of the Player Component
 */
function Player() {
  const audioEl = useRef(null);
  const { actions, appState } = useContext(AppContext);
  const {
    play,
    pause,
    loading,
    setTracks,
    setTrackPosition,
    setAutoPlay,
  } = actions;
  const { trackPosition, currentTrack, autoPlay } = appState;
  const [totalTime, setTotalTime] = useState({
    totalFormatTime: '',
    totalTimeInSeconds: 0,
  });
  const [currentTime, setCurrentTime] = useState({
    currentFormatTime: '',
    currentTimeInSeconds: 0,
  });

  useEffect(() => {
    getTracks().then((data) => {
      setTracks(data);
    });
  }, []);

  const handleOnCanPlay = useCallback(() => {
    const { duration } = audioEl.current;
    const trackDuration = formatTime(duration);
    if (autoPlay) {
      audioEl.current.play();
      setAutoPlay(false);
    }
    setTotalTime({
      totalFormatTime: trackDuration,
      totalTimeInSeconds: duration,
    });
  }, [totalTime, autoPlay]);

  const handleOnPlaying = useCallback(() => {
    play();
  }, []);

  const handleOnPause = useCallback(() => {
    pause();
  }, []);

  const handleOnEnded = useCallback(() => {
    setTrackPosition(trackPosition + 1);
  }, [trackPosition]);

  const handleOnTimeUpdate = useCallback(() => {
    const { currentTime: time } = audioEl.current;
    const trackCurrentTime = formatTime(time);
    setCurrentTime({
      currentFormatTime: trackCurrentTime,
      currentTimeInSeconds: time,
    });
  }, [currentTime]);

  const handleOnWaiting = useCallback(() => {
    loading();
  }, []);

  return (
    <div css={Styles.Content}>
      <audio
        src={currentTrack.trackUrl}
        ref={audioEl}
        controls
        css={{ position: 'absolute', top: -200 }}
        onPlaying={handleOnPlaying}
        onPause={handleOnPause}
        onCanPlay={handleOnCanPlay}
        onEnded={handleOnEnded}
        onError={() => {}}
        onTimeUpdate={handleOnTimeUpdate}
        onWaiting={handleOnWaiting}
      />
      <Track
        audioEl={audioEl}
        totalTime={totalTime}
        currentTime={currentTime}
        setCurrentTime={setCurrentTime}
      />
      <Content audioEl={audioEl} />
    </div>
  );
}

export default Player;
