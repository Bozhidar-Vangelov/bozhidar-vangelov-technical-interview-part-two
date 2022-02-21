import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const posts = createApi({
  reducerPath: 'posts',
  tagTypes: ['Posts'],
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://jsonplaceholder.typicode.com/',
  }),
  endpoints: (builder) => ({
    getUserPosts: builder.query({
      query: (userId) => `posts?userId=${userId}`,
    }),

    createPost: builder.mutation({
      query: ({ userId, ...rest }) => ({
        url: `posts?userId=${userId}`,
        method: 'POST',
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
} = posts;
