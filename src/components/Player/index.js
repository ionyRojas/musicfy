/** @jsx jsx */
import { jsx } from '@emotion/core';
import Track from 'components/Track';
import Content from 'components/Content';
import * as Styles from './index.styles';

/**
 * Wrapper of the Player Component
 */
function Player() {
  return (
    <div css={Styles.Content}>
      <Track />
      <Content />
    </div>
  );
}

export default Player;
