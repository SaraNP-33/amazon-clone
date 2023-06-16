import { configureStore } from '@reduxjs/toolkit';
import userReducer from "./reducers/userReducer";
import cartReducer from './reducers/cartReducer';

export const store = configureStore({
  reducer: {
    users: userReducer,
    cart: cartReducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch