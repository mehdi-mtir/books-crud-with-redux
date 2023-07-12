import React from 'react';
import { Link } from 'react-router-dom';
import { deleteBook} from '../../redux/actions/actions';
import { Dispatch } from "redux"
import { useSelector, shallowEqual, useDispatch } from "react-redux"

const ListBook : React.FC= () => {

  //Récupérer la liste des données à partir du store
  const books: readonly IBook[] = useSelector(
    (state: BookState) => state.books,
    shallowEqual
  )

  //Gestion de l'action de suppression
  const dispatch: Dispatch<any> = useDispatch()

  const delBook = React.useCallback(
    (book: IBook) => dispatch( deleteBook(book) ),
    [dispatch]
  )


  return <div className="row">
  <h1>List Book Component</h1>
  <Link className="btn btn-success col-3" to={'/books/add'}>Ajouter un nouveau livre</Link>
  <table className="table">
<thead>
  <tr>
    <th scope="col">#</th>
    <th scope="col">Titre</th>
    <th scope="col">Auteur</th>
    <th scope="col">Editer</th>
    <th scope="col">Supprimer</th>
  </tr>
</thead>
<tbody>
  {
    books.map(book=><tr key={book.isbn}>
      <th scope="row">{book.isbn}</th>
      <td>{book.titre}</td>
      <td>{book.auteur}</td>
      <td><Link className="btn btn-primary" to={`/books/update/${book.isbn}`} >Editer</Link></td>
      <td><button className="btn btn-danger" onClick={()=>{delBook(book)}}>Supprimer</button></td>
    </tr>)
  }

  </tbody>
  </table>
</div>
}

export default ListBook;
