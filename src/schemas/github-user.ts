import * as z from "zod";

export const githubUserSchema = z.object({
  avatar_url: z.url(),
  name: z.string().nullable(),
  login: z.string(),
  created_at: z.string(),
  bio: z.string().nullable(),
  public_repos: z.number(),
  followers: z.number(),
  following: z.number(),
  location: z.string().nullable(),
  blog: z.union([z.literal(""), z.url()]),
  twitter_username: z.string().nullable(),
  company: z.string().nullable(),
});

export type GithubUser = z.infer<typeof githubUserSchema>;
