import * as React from "react"
import { addBook} from '../../redux/actions/actions';
import { Dispatch } from "redux"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom";

type Props = {};

const AddBook: React.FC<Props> = () => {
const navigate = useNavigate();
  //Local state to handle input changes
  const [book, setBook] = React.useState<IBook>()

  const inputHandler = (e: React.FormEvent<HTMLInputElement>) => {
    setBook({
      ...book,
      [e.currentTarget.id]: e.currentTarget.value,
    })
  }

 //Dispatch action Add

 const dispatch: Dispatch<any> = useDispatch()

 const saveBook = React.useCallback(
   (book: IBook) => {
     dispatch(addBook(book));
     navigate('/books');
   },

   [dispatch]
 )


  return <div className="row">
  <h1>Add Book Component</h1>
  <form>
    <div className="mb-3">
      <label htmlFor="isbn" className="form-label">Isbn</label>
      <input type="text" className="form-control" id="isbn" name="isbn" onChange={inputHandler} />
    </div>
    <div className="mb-3">
      <label htmlFor="titre" className="form-label">Titre</label>
      <input type="text" className="form-control" id="titre" name="titre" onChange={inputHandler} />
    </div>
    <div className="mb-3">
      <label htmlFor="auteur" className="form-label">Auteur</label>
      <input type="text" className="form-control" id="auteur" name="auteur" onChange={inputHandler} />
    </div>
    <button type="button" className="btn btn-primary" onClick={()=>{
      saveBook(book);
    }
    }>Valider</button>
  </form>
</div>
}

export default AddBook;
