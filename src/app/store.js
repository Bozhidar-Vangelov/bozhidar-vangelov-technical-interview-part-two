import { configureStore } from '@reduxjs/toolkit';
import { users } from '../features/users.js';
import { posts } from '../features/posts.js';

export const store = configureStore({
  reducer: {
    [users.reducerPath]: users.reducer,
    [posts.reducerPath]: posts.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([users.middleware, posts.middleware]),
});
