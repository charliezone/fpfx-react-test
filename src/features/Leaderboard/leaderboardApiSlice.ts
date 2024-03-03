import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface ImportMeta {
    readonly env: {readonly VITE_API_URL: string}
}

export type User = {
    id: string;
    name: string;
    lastname: string;
    profit: number[];
    loss: number[];
}

export const apiSlice = createApi({
    reducerPath: 'usersApi',
    baseQuery: fetchBaseQuery({
        baseUrl: (import.meta as unknown as ImportMeta).env.VITE_API_URL,
    }),
    endpoints: (build) => ({
        getUsers: build.query<User[], string>({
            query(query) {
                return `/users?${query}`;
            }
        }),
    }),
});

export const { useGetUsersQuery } = apiSlice;