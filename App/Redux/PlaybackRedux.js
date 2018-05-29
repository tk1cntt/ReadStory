import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  playbackInit: null,
  playbackState: ['state'],
  playbackTrack: ['track'],
})

export const PlaybackTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  init: false,
  state: null,
  currentTrack: null,
})

/* ------------- Selectors ------------- */

export const PlaybackSelectors = {
  getData: state => state.data
}

/* ------------- Reducers ------------- */

export const init = (state) =>
  state.merge({ init: true })

export const state = (state, action) => {
  return state.merge({ state: action.state })
}

export const track = (state, action) =>
  state.merge({ currentTrack: action.track })

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.PLAYBACK_INIT]: init,
  [Types.PLAYBACK_STATE]: state,
  [Types.PLAYBACK_TRACK]: track,
})
