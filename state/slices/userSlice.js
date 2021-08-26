import { createSlice } from '@reduxjs/toolkit';


const initialState = {
  id: 0,
  userName: 'UserName'
};


export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.id = action.payload.id;
      state.username = action.payload.username;
    },
    deleteUser: (state, action) => {
      // construct new result immutably and return
      return state.id !== action.payload;
    }
  }
});


// selectors
export const getUser = (state) => state.user;

// reducers and actions
export const { setUser, deleteUser } = userSlice.actions;

export default userSlice.reducer;