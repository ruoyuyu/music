import * as actionTypes from './action-types'
import * as mutationTypes from './mutation-types'

export default {
  [actionTypes.SET_SONG_INFO] ({ commit }, payload) {
    console.log(payload)
    commit(mutationTypes.SET_SHOW_PLAYER, true)
  }
}
