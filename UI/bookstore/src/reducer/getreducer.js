const initialState = {
  fetchbooks: [],
  searchBooks: [],
  currentPage:1,
  cart:[]
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
             case "ADD_CART":
                return { ...state, cart: [...state.cart, action.payload] };
            case  "GET_CART":
                return {
                    ...state,
                    cart: action.payload
                }
               
                case "UPDATE_CART":
            let newCart = [...state.cart];
            newCart[action.payload.index] =action.payload.data;
            return { ...state, cart: newCart };
      
            case  "DELETE_CART":
                
                let deleteItem = [...state.cart];
                console.log( action.payload);
      deleteItem = deleteItem.filter((item) => item._id !== action.payload);
      return { ...state, cart: deleteItem };
      default : return state

  
  }
}