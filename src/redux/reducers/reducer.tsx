import actionsTypes from '../actions/actionsTypes';


const initialState = {
  books :[
    {id:1, isbn:'123', titre : 'livre1', auteur : 'auteur1'},
    {id:2, isbn:'456', titre : 'livre2', auteur : 'auteur2'},
  ]
};


const reducer = ( state: BookState = initialState, action: BookAction): BookState => {
  switch(action.type){

    case(actionsTypes.ADD_BOOK) : {
      return {
        ...state,
        books: state.books.concat(action.book)
      }
    }

    case(actionsTypes.EDIT_BOOK) : {
      return {
        ...state,
        books : state.books.map(b=>{
          if(b.id===action.book.id)
            return action.book;
          else
            return b;
        })
      }
    }

    case(actionsTypes.DELETE_BOOK) : {
      return {
        ...state,
        books : state.books.filter(b=>b.id !== action.book.id)
      }
    }

    default :
      return state
  }
}

export default reducer;
