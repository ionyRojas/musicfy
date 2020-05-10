/** @jsx jsx */
import { jsx } from '@emotion/core';
import { useReducer } from 'react';
import * as Styles from './index.styles';
import Player from 'components/Player';
import AppContext from 'context/appContext';
import { TRACK_STATES, initialState, appReducer, actions } from 'store';

/**
 * Main Component where the app is being rendered
 */
function App() {
  const [appState, dispatch] = useReducer(appReducer, initialState);

  return (
    <div css={Styles.Wrapper}>
      <div css={Styles.Background} />
      <AppContext.Provider
        value={{
          actions: actions(dispatch),
          appState,
          TRACK_STATES,
        }}
      >
        <Player />
      </AppContext.Provider>
    </div>
  );
}

export default App;
