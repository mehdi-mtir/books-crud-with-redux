import actionsTypes from './actionsTypes';


export const addBook = (book : IBook) : BookAction => {
  return {
    type : actionsTypes.ADD_BOOK,
    book
  }
}

export const editBook = (book : IBook) : BookAction =>{
  return {
    type : actionsTypes.EDIT_BOOK,
    book
  }
}

export const deleteBook = (book : IBook) : BookAction => {
  return {
    type : actionsTypes.DELETE_BOOK,
    book
  }
}


