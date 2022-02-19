import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://jsonplaceholder.typicode.com/',
  }),
  endpoints: (builder) => ({
    getAllUsers: builder.query({
      query: () => 'users',
    }),
    getUserPosts: builder.query({
      query: (userId) => `posts?userId=${userId}`,
    }),
  }),
});

export const { useGetAllQuery, useGetPostsForUserQuery } = userApi;
