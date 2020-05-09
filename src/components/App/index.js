/** @jsx jsx */
import { jsx } from '@emotion/core';
import React from 'react';
import * as Styles from './index.styles';

function App() {
  return (
    <React.Fragment>
      <div css={Styles.background} />
      <div css={Styles.content}>content here</div>
    </React.Fragment>
  );
}

export default App;
