/** @jsx jsx */
import { jsx } from '@emotion/core';
import * as Styles from './index.styles';
import Track from 'components/Track';
import Content from 'components/Content';

function App() {
  return (
    <div css={Styles.wrapper}>
      <div css={Styles.background} />
      <div css={Styles.content}>
        <Track />
        <Content />
      </div>
    </div>
  );
}

export default App;
