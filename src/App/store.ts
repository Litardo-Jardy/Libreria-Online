import { configureStore } from '@reduxjs/toolkit';
import bookSlice from '../Features/Books/bookSlice';
import listSlice from '../Features/Books/listSlice';

export const store = configureStore({
   reducer: {
      books: bookSlice,
      list: listSlice
   }
});
