import { useQuery } from "@tanstack/react-query";
import { getUser } from "../api/github";

export const useGithubUser = (username: string) => {
  return useQuery({
    queryKey: ["users", username],
    queryFn: () => getUser(username),
  });
};
