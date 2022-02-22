import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseUrl = 'https://jsonplaceholder.typicode.com/';

export const users = createApi({
  reducerPath: 'users',
  tagTypes: ['User'],
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getAllUsers: builder.query({
      query: () => 'users',
    }),
    updateUserById: builder.mutation({
      query: ({ userId, ...body }) => ({
        url: `users/${userId}`,
        method: 'PATCH',
        body,
      }),
      async onQueryStarted({ userId }, { dispatch, queryFulfilled }) {
        const { data: updatedData } = await queryFulfilled;

        dispatch(
          users.util.updateQueryData('getAllUsers', undefined, (userList) => {
            const userIndex = userList.findIndex((user) => user.id === userId);
            const currentUser = userList[userIndex];
            Object.assign(currentUser, {
              ...currentUser,
              ...updatedData,
            });
          })
        );
      },
    }),
  }),
});

export const { useGetAllUsersQuery, useUpdateUserByIdMutation } = users;
