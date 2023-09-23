import { createSlice } from '@reduxjs/toolkit'
import data from './data.json'

export const bookSlice = createSlice({
        
       name: "books",
       initialState: data,
       reducers: {
         deleteBook: (state, action) =>{
            const bookIndex = state.library.findIndex( 
              element => element.book.ISBN === action.payload);
            if( bookIndex !== -1){
              state.library.splice(bookIndex, 1)} 
        },
        
         addBook: (state, action) => {
           state.library.push(action.payload);}
       }});

export const { deleteBook, addBook } = bookSlice.actions;
export default bookSlice.reducer;