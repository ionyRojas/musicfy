/** @jsx jsx */
import { jsx } from '@emotion/core';
import { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
function Content() {
  const { isPlaying, setIsPlaying } = useContext(AppContext);
  return (
    <div css={Styles.Wrapper}>
      <span css={Styles.Art(isPlaying)}>Art</span>
      <div css={Styles.ControlsWrapper}>
        <span css={Styles.Control}>
          <FontAwesomeIcon icon={faBackward} />
        </span>
        <span css={Styles.Control} onClick={() => setIsPlaying(!isPlaying)}>
          {isPlaying ? (
            <FontAwesomeIcon icon={faPause} />
          ) : (
            <FontAwesomeIcon icon={faPlay} />
          )}
        </span>
        <span css={Styles.Control}>
          <FontAwesomeIcon icon={faForward} />
        </span>
      </div>
    </div>
  );
}

export default Content;
