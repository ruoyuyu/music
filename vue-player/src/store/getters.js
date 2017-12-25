export const currentSong = (state, getters) => {
  return state.playList[state.currentIndex] || {}
}
