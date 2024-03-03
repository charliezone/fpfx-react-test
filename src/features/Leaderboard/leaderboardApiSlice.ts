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

type Response = {
    users: User[], 
    links: string[],
    totalCount: number,
}

export const apiSlice = createApi({
    reducerPath: 'usersApi',
    baseQuery: fetchBaseQuery({
        baseUrl: (import.meta as unknown as ImportMeta).env.VITE_API_URL,
    }),
    endpoints: (build) => ({
        getUsers: build.query<Response, string>({
            query(query) {
                return {
                    url: `/users?${query}`,
                    responseHandler: async (response) => {
                        const result: Response = {
                            users: await response.json(),
                            links: [],
                            totalCount: 0,
                        };
                        const linkHeader = response.headers.get('Link');
                        if (linkHeader)
                            result.links.push(...linkHeader.split(', '));

                        const totalCount = response.headers.get('X-Total-Count');
                        if(totalCount)
                            result.totalCount = +totalCount;
                        
                        return result;
                    }
                };
            }
        }),
    }),
});

export const { useGetUsersQuery } = apiSlice;