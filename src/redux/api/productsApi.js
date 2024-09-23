import { api } from '.';

const productsApi = api.injectEndpoints({
  endpoints: (build) => ({
    getUser: build.query({
      query: () => ({
        url: "/users?page=2"
      }),
      providesTags: [""]
    }),
    getUserById: build.query({ 
      query: (id) => ({
        url: `/users/${id}`
      }),
    }),
    createUsers: build.mutation({
      query: (body) => ({
        url: "/users",
        method: "POST",
        body
      }),
    }),
  }),
  overrideExisting: false, 
});

export const { useGetUserQuery, useGetUserByIdQuery, useCreateUsersMutation } = productsApi;

export default productsApi