import * as actionTypes from './constants'

const initialState = {
  currentPage: 0,
  roomList: [],
  totalCount: 0,

  isLoading: false
}
function reducer(state = initialState, actions) {
  switch (actions.type) {
    case actionTypes.CHANGE_CURRENT_PAGE:
      return { ...state, currentPage: actions.currentPage }
    case actionTypes.CHANGE_ROOM_LIST:
      return { ...state, roomList: actions.roomList }
    case actionTypes.CHANGE_TOTAL_COUNT:
      return { ...state, totalCount: actions.totalCount }
    case actionTypes.CHANGE_IS_LOADING:
      return { ...state, isLoading: actions.isLoading }
    default:
      return state
  }

}

export default reducer