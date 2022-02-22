import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const baseUrl = 'https://jsonplaceholder.typicode.com/'

export const posts = createApi({
  reducerPath: 'posts',
  tagTypes: ['User'],
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: builder => ({
    getUserPosts: builder.query({
      query: userId => ({
        url: 'posts',
        params: { userId }
      })
    }),
    createPost: builder.mutation({
      query: ({ userId, ...body }) => ({
        url: 'posts',
        params: { userId },
        method: 'POST',
        body: {
          userId,
          ...body
        }
      }),
      async onQueryStarted({ userId, ...patch }, { dispatch, queryFulfilled }) {
        const patchResult = dispatch(
          posts.util.updateQueryData('getUserPosts', userId, draft => {
            const lastId = draft[draft.length - 1].id
            draft.push({ userId, id: lastId + 1, ...patch })
          })
        )
        try {
          await queryFulfilled
        } catch {
          patchResult.undo()
        }
      }
    }),
    deletePost: builder.mutation({
      query: ({ id }) => ({
        url: `posts/${id}`,
        method: 'DELETE'
      }),
      async onQueryStarted({ userId, id }, { dispatch, queryFulfilled }) {
        await queryFulfilled
        dispatch(
          posts.util.updateQueryData('getUserPosts', id, postList => {
            console.log({userId, id })
            const postIndex = postList.findIndex(post => post.id === id && post.userId === userId)

            delete postList[postIndex]
          })
        )
      }
    })
  })
})

export const { useGetUserPostsQuery, useCreatePostMutation, useDeletePostMutation } = posts
