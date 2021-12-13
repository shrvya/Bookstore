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

