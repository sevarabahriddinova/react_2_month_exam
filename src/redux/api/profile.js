import { api } from "./index";

const profile = api.injectEndpoints({
  endpoints: (build) => ({
    getProfile: build.query({
      query: () => ({
        url: "/auth/profile"
      }),
    })
  }),
});

export const { useGetProfileQuery } = profile;