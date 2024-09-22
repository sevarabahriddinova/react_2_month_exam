import { api } from '.';

const productsApi = api.injectEndpoints({
  endpoints: (build) => ({
    getUser: build.query({
      query: () => ({
        url: "/users?page=2"
      }),
    }),
    getUserById: build.query({ 
      query: (id) => ({
        url: `/users/${id}`
      }),
    }),
  }),
  overrideExisting: false, 
});

export const { useGetUserQuery, useGetUserByIdQuery } = productsApi;

export default productsApi