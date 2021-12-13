const initialState = {
  fetchbooks: [],
  searchBooks: [],
  currentPage:1
  };
export default function DisplayBooks(state = initialState, action) {

    switch (action.type) {
        case "GET_BOOKS" :
        return {
            ...state,
            fetchbooks: action.payload
        }
        case "SELECTED_BOOK":
            return {
                ...state,
                searchBooks: action.payload
            };
            case "CURRENT_PAGE":
            return {
                ...state,
                currentPage: action.payload
            }
      default : return state

  
  }
}