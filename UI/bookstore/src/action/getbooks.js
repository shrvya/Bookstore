export const getBooks=(books)=>{
    
    return{
     type:"GET_BOOKS",
     payload: books,
    }
}
export const filterBooks=(books)=>{
    
    return{
     type:"SELECTED_BOOK",
     payload: books,
    }
}
export const setCurrentPage=(payload)=>{
    return{
    type: "CURRENT_PAGE",
    payload
    
  }}
  export const addtoCart=(books)=>{
    return{
    type: "ADD_CART",
    payload:books,
    
  }}
  export const getcart=(payload)=>{
    return{
    type: "GET_CART",
    payload
    
  }}
  export const updatecart=(payload)=>{
    return{
    type: "UPDATE_CART",
    payload
    
  }}
