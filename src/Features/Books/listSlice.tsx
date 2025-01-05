import { createSlice } from '@reduxjs/toolkit';

const getData = () => {
   const data = localStorage.getItem('Registros');
   if (data) {
      return JSON.parse(data);
   } else {
      return { 'library': [] };
   }
};


// ----------- Books;
interface Author {
	name: string,
	otherBooks: []
}

interface Book {
	title: string,
	pages: number,
	genere: string,
	cover: string,
	synopsis: string,
	year: number,
	link: string,
	ISBN: string,
	author: Author
}

interface Books {
	book: Book;
}


export const listSlice = createSlice({
   name: 'list',
   initialState: getData,
   reducers: {
      deleteList: (state, action) => {
         const bookIndex = state.library.findIndex(
            (element: Books) => element.book.ISBN === action.payload);
         if (bookIndex !== -1) {
            state.library.splice(bookIndex, 1);
         }
      },

      addList: (state, action) => {
         const bookIndex = state.library.findIndex(
            (element: Books) => element.book.ISBN === action.payload.book.ISBN);
         if (bookIndex == -1) {
            state.library.push(action.payload);
         } else {
            alert('Este libro ya ha sido agregado antes');
         }
      },

      clearList: state => {
         state.library = [];
      }
   }
});

export const { deleteList, addList, clearList } = listSlice.actions;
export default listSlice.reducer;
