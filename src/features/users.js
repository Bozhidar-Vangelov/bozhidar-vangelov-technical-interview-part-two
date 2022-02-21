import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseUrl = 'https://jsonplaceholder.typicode.com/';

export const users = createApi({
  reducerPath: 'users',
  tagTypes: ['Users'],
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getAllUsers: builder.query({
      query: () => 'users',
    }),
    getUserById: builder.query({
      query: (userId) => `users/${userId}`,
    }),

    updateUserById: builder.mutation({
      query: ({ userId, ...rest }) => ({
        url: `users/${userId}`,
        method: 'PUT',
        body: rest,
      }),
    }),
  }),
});

export const {
  useGetAllUsersQuery,
  useGetUserByIdQuery,
  useGetUserPostsQuery,
  useUpdateUserByIdMutation,
  useCreatePostMutation,
} = users;
