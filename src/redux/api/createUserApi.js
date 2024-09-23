import { api } from "./index";

const createUserApi = api.injectEndpoints({
    endpoints: (build) => ({
      createUsers: build.mutation({
        query: (body) => ({
          url: "/users",
          method: "POST",
          body
        }),
      }),
    })
})

export const { useCreateUsersMutation } = createUserApi