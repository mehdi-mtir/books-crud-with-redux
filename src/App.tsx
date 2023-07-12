import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ListBook from './components/books/ListBook';
import AddBook from './components/books/AddBook';
import EditBook from './components/books/EditBook';

const App: React.FC = () => {
  return (
    <div className="container">
      <h1>Books App with Redux</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/books" element={<ListBook />} />
          <Route path="/books/add" element={<AddBook />} />
          <Route path="/books/edit/:id" element={<EditBook />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
