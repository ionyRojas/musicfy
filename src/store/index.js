// machine state for the reducer
export const TRACK_STATES = {
  IDLE: 'IDLE',
  LOADING: 'LOADING',
  PLAYING: 'PLAYING',
  PAUSED: 'PAUSED',
  ERROR: 'ERROR',
};

// initial state for the component
export const initialState = {
  trackState: TRACK_STATES.IDLE,
  tracks: [],
  trackPosition: 0,
  currentTrack: {},
};

// types
const PLAY = 'PLAY';
const LOADING = 'LOADING';
const PAUSE = 'PAUSE';
const ERROR = 'ERROR';
const SET_SONGS = 'SET_SONGS';
const SET_TRACK_POSITION = 'SET_TRACK_POSITION';
const SET_CURRENT_TRACK = 'SET_CURRENT_TRACK';

/**
 * Reducer who's transforms the information of the global context state
 * @param  {Object} state
 * @param  {function} action
 */
export function appReducer(state, action) {
  const { type, payload = '' } = action;

  switch (type) {
    case PLAY:
      return { ...state, trackState: TRACK_STATES.PLAYING };
    case LOADING:
      return { ...state, trackState: TRACK_STATES.LOADING };
    case PAUSE:
      return { ...state, trackState: TRACK_STATES.PAUSED };
    case ERROR:
      return { ...state, trackState: TRACK_STATES.ERROR };
    case SET_SONGS:
      return {
        ...state,
        ...{ tracks: payload.tracks, currentTrack: payload.tracks[0] },
      };
    case SET_TRACK_POSITION:
      return {
        ...state,
        ...{
          trackPosition: payload.position,
          currentTrack: state.tracks[payload.position],
        },
      };
    case SET_CURRENT_TRACK:
      return { ...state, currentTrack: payload.currentTrack };
    default:
      return state;
  }
}

/**
 * api with the actions to change the global state
 * @param  {function} dispatch a wrapper of actions to dispatch reducers
 * @return {function}
 */
export const actions = (dispatch) => ({
  play: () => dispatch({ type: PLAY }),
  pause: () => dispatch({ type: PAUSE }),
  loading: () => dispatch({ type: LOADING }),
  error: () => dispatch({ type: ERROR }),
  setTracks: (tracks) => dispatch({ type: SET_SONGS, payload: { tracks } }),
  setTrackPosition: (position) =>
    dispatch({ type: SET_TRACK_POSITION, payload: { position } }),
  setCurrentTrack: (currentTrack) =>
    dispatch({ type: SET_CURRENT_TRACK, payload: { currentTrack } }),
});
