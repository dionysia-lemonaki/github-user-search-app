import { githubUserSchema, type GithubUser } from "../schemas/github-user";

const BASE_URL = "https://api.github.com";

export const getUser = async (username: string): Promise<GithubUser> => {
  const response = await fetch(`${BASE_URL}/users/${username}`);

  if (!response.ok) {
    if (response.status === 404) {
      throw new Error("User not found");
    }
    throw new Error("Network response was not ok");
  }

  const data = await response.json();
  const result = githubUserSchema.safeParse(data);

  if (!result.success) {
    throw new Error("Invalid API response shape");
  }

  return result.data;
};
