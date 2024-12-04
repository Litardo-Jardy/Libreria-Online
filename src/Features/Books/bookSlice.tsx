import { createSlice } from '@reduxjs/toolkit'
import data from './data.json'

export const bookSlice = createSlice({
        
       name: "books",
       initialState: data,
       reducers: {
        
       }});

// export const { deleteBook, addBook } = bookSlice.actions;
export default bookSlice.reducer;
