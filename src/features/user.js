import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const userApi = createApi({
  reducerPath: 'userApi',
  tagTypes: ['User'],
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://jsonplaceholder.typicode.com/',
  }),
  endpoints: (builder) => ({
    getAllUsers: builder.query({
      query: () => 'users',
      providesTags: ['User'],
    }),
    getUserById: builder.query({
      query: (userId) => `users/${userId}`,
      providesTags: ['User'],
    }),
    getUserPosts: builder.query({
      query: (userId) => `posts?userId=${userId}`,
      providesTags: ['User'],
    }),
    updateUserById: builder.mutation({
      query: ({ userId, ...rest }) => ({
        url: `users/${userId}`,
        method: 'PUT',
        body: rest,
      }),
      invalidatesTags: ['User'],
    }),
    createPost: builder.mutation({
      query: ({ userId, ...rest }) => ({
        url: `posts?userId=${userId}`,
        method: 'POST',
        body: rest,
      }),
      invalidatesTags: ['User'],
    }),
  }),
});

export const {
  useGetAllUsersQuery,
  useGetUserByIdQuery,
  useGetUserPostsQuery,
  useUpdateUserByIdMutation,
  useCreatePostMutation,
} = userApi;
