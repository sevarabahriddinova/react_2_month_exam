import { api } from '.';

const productsApi = api.injectEndpoints({
  endpoints: (build) => ({
    getUser: build.query({
      query: () => ({
        url: "/users?page=2"
      }),
      providesTags: ["USERS"]
    }),
    getUserById: build.query({ 
      query: (id) => ({
        url: `/users/${id}`
      }),
      providesTags: ["USERS"]
    }),
    createUsers: build.mutation({
      query: (body) => ({
        url: "/users",
        method: "POST",
        body
      }),
      invalidatesTags: ["USERS"]
    }),
  }),
  overrideExisting: false, 
});

export const { useGetUserQuery, useGetUserByIdQuery, useCreateUsersMutation } = productsApi;

export default productsApi