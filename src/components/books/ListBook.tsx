import React, {useState} from 'react';
import { Link } from 'react-router-dom';


const ListBook : React.FC= () => {
  const [books, setBooks] = useState([])
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
      <td><button className="btn btn-danger">Supprimer</button></td>
    </tr>)
  }

  </tbody>
  </table>
</div>
}

export default ListBook;
