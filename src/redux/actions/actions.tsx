import actionsTypes from './actionsTypes';

export const addBook = (book : IBook) => {
  const action =  {
    type : actionsTypes.ADD_BOOK,
    book
  }
  return simulateHttpRequest(action)
}

export const editBook = (book : IBook) =>{
  const action =  {
    type : actionsTypes.EDIT_BOOK,
    book
  }
  return simulateHttpRequest(action)
}

export const deleteBook = (book : IBook) => {
  const action = {
    type : actionsTypes.DELETE_BOOK,
    book
  }

  return simulateHttpRequest(action)
}

export function simulateHttpRequest(action: BookAction) {
  return (dispatch: DispatchType) => {
    setTimeout(() => {
      dispatch(action)
    }, 500)
  }
}


