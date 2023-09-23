import { createSlice } from '@reduxjs/toolkit'

export const listSlice = createSlice({
        
       name: "list",
       initialState: {
               "library": []},
       reducers: {
          deleteList: (state, action) =>{
                const bookIndex = state.library.findIndex( 
                      element => element.book.ISBN === action.payload);
                      if( bookIndex !== -1){
                        state.library.splice(bookIndex, 1)}
                },
                  
          addList: (state, action) => {
                const bookIndex = state.library.findIndex( 
                      element => element.book.ISBN === action.payload.book.ISBN);
                      if( bookIndex == -1){
                        state.library.push(action.payload);
                      }else{
                        alert("Este libro ya ha sido agregado antes")}
                }
       }
});

export const { deleteList, addList} = listSlice.actions;
export default listSlice.reducer;