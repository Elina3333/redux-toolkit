import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {IPost} from "../models/IPosts";

export const postApi = createApi({
    reducerPath: 'postAPI',
    tagTypes:['Post'],
    baseQuery: fetchBaseQuery({baseUrl: '  http://localhost:4200'}),
    endpoints: (build) => ({
        fetchAllPosts: build.query<IPost[], number>({
            query: (limit: number) => ({
                url: '/posts',
                params: {
                    _limit: limit
                }
            }),
            providesTags:['Post']
        }),
        createPost: build.mutation<IPost, IPost>({
            query: (post: IPost) => ({
                url: '/posts',
                method: 'POST',
                body: post
            }),
            invalidatesTags:['Post']
        })
    })
})