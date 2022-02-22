import { configureStore } from '@reduxjs/toolkit'
import { users } from '../services/users'
import { posts } from '../services/posts'

export const store = configureStore({
  reducer: {
    [users.reducerPath]: users.reducer,
    [posts.reducerPath]: posts.reducer
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat([users.middleware, posts.middleware])
})
