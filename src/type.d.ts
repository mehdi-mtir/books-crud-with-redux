interface IBook{
  id : number;
  isbn : string;
  titre : string;
  auteur : string;
}

type BookAction = {
  type : string,
  book : IBook
}

type BookState = {
  books : IBook[]
}
