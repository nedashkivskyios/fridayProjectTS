const initialState = {}
type MainReducerStateType = typeof initialState


export const mainReducer = (state: MainReducerStateType = initialState, action: any): MainReducerStateType => {
  switch (action.type) {
    default: {
      return state
    }
  }
}