
export interface GeneralStore {
  searchValue: string;
  count: number;
}

const initialState = {
  searchValue: '',
  count: 0
}  as GeneralStore

const reducer = (state = initialState, action: any) => {
  switch(action.type) {
    case 'INPUT_UPDATED':
      return { ...state, searchValue: action.data};
    case 'COUNT_UPDATED':
      return { ...state, count: action.data};
    default:
      return state;
  }
}

export default reducer;