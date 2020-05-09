/** @jsx jsx */
import { jsx } from '@emotion/core';
import { useState } from 'react';
import * as Styles from './index.styles';
import Player from 'components/Player';
import AppContext from 'context/appContext';

/**
 * Main Component where the app is being rendered
 */
function App() {
  const [isPlaying, setIsPlaying] = useState(false); // TODO: change this to a reducer
  return (
    <div css={Styles.Wrapper}>
      <div css={Styles.Background} />
      <AppContext.Provider value={{ isPlaying, setIsPlaying }}>
        <Player />
      </AppContext.Provider>
    </div>
  );
}

export default App;
