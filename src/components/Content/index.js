/** @jsx jsx */
import { jsx } from '@emotion/core';
import * as Styles from './index.styles';

function Content() {
  return (
    <div css={Styles.wrapper}>
      <span css={Styles.art}>Art</span>
      <div css={Styles.controlsWrapper}>
        <span css={Styles.control}>prev</span>
        <span css={Styles.control}>play</span>
        <span css={Styles.control}>next</span>
      </div>
    </div>
  );
}

export default Content;
