/** @jsx jsx */
import { jsx } from '@emotion/core';
import { useRef, useEffect, useCallback, useContext } from 'react';
import Track from 'components/Track';
import Content from 'components/Content';
import * as Styles from './index.styles';
import { getTracks } from 'utils/urls';
import AppContext from 'context/appContext';

/**
 * Wrapper of the Player Component
 */
function Player() {
  const audioEl = useRef(null);
  const { actions, appState } = useContext(AppContext);
  const { play, pause, loading, setTracks, setTrackPosition } = actions;
  const { trackPosition, currentTrack } = appState;

  useEffect(() => {
    // loading();
    getTracks().then((data) => {
      setTracks(data);
    });
  }, []);

  /**
   * @param  {} (
   */
  const handleOnCanPlay = useCallback(() => {
    console.log('can play');
  }, []);

  /**
   * @param  {} (
   */
  const handleOnPlaying = useCallback(() => {
    play();
  }, []);

  /**
   * @param  {} (
   */
  const handleOnPause = useCallback(() => {
    pause();
  }, []);

  /**
   * @param  {} (
   */
  const handleOnEnded = useCallback(() => {
    setTrackPosition(trackPosition + 1);
  }, [trackPosition]);

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
      />
      <Track audioEl={audioEl} />
      <Content audioEl={audioEl} />
    </div>
  );
}

export default Player;
