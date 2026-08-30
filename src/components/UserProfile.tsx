import { useGithubUser } from "../hooks/useGithubUser";
import UserNotFound from "./UserNotFound";
import { formatDate } from "../utils/formatDate";
import iconLocation from "../assets/images/icon-location.svg";
import iconTwitter from "../assets/images/icon-twitter.svg";
import iconWebsite from "../assets/images/icon-website.svg";
import iconCompany from "../assets/images/icon-company.svg";

const UserProfile = ({ username }: { username: string }) => {
  const { data, isPending, isError, error } = useGithubUser(username);

  if (isPending) {
    return <p>Loading...</p>;
  }

  if (isError) {
    if (error.message === "User not found") {
      return <UserNotFound />;
    }
    return <p>{error.message}</p>;
  }

  return (
    data && (
      <div className="mt-8 md:mt-10 bg-neutral-0 dark:bg-neutral-800 rounded-2xl py-8 px-6 md:p-12 grid md:grid-cols-[auto_1fr] gap-8">
        <img
          src={data.avatar_url}
          alt=""
          width="117"
          height="117"
          className="rounded-full"
        />
        <div>
          <div className="flex flex-col md:flex-row md:justify-between">
            <div>
              <h1 className="text-neutral-700 dark:text-neutral-0 font-bold text-[1.625rem] leading-[1.2]">
                {data.name ?? "Name not Available"}
              </h1>
              <p className="text-blue-300 dark:text-blue-500 font-normal text-base leading-normal">
                @{data.login}
              </p>
            </div>
            <p className="text-neutral-500 dark:text-neutral-0 text-[0.9375rem] font-normal leading-normal">
              Joined {formatDate(data.created_at)}
            </p>
          </div>
          <p className="mt-6 text-neutral-500/75 dark:text-neutral-0/70 text-[0.9375rem] font-normal leading-normal">
            {data.bio ?? "This profile has no bio"}
          </p>
          <ul className="mt-6 bg-neutral-100 dark:bg-neutral-900 rounded-[10px] py-4 px-5 md:px-8 grid gap-4 md:grid-cols-3">
            <li className="flex flex-col gap-1">
              <span className="text-neutral-500 dark:text-neutral-0 text-[0.8125rem] font-normal leading-normal">
                Repos
              </span>
              <span className="text-neutral-700 dark:text-neutral-0 font-bold text-[1.375rem] leading-[1.4]">
                {data.public_repos}
              </span>
            </li>
            <li className="flex flex-col gap-1">
              <span className="text-neutral-500 dark:text-neutral-0 text-[0.8125rem] font-normal leading-normal">
                Followers
              </span>
              <span className="text-neutral-700 dark:text-neutral-0 font-bold text-[1.375rem] leading-[1.4]">
                {data.followers}
              </span>
            </li>
            <li className="flex flex-col gap-1">
              <span className="text-neutral-500 dark:text-neutral-0 text-[0.8125rem] font-normal leading-normal">
                Following
              </span>
              <span className="text-neutral-700 dark:text-neutral-0 font-bold text-[1.375rem] leading-[1.4]">
                {data.following}
              </span>
            </li>
          </ul>
          <ul className="mt-6 grid md:grid-cols-2 gap-4">
            <li className="flex items-center gap-4">
              <img src={iconLocation} alt="" />
              <span
                className={`${data.location ? "text-neutral-500 dark:text-neutral-0" : "text-neutral-500/70 dark:text-neutral-0/70"}  font-normal leading-normal text-[0.9375rem]`}
              >
                {data.location ?? "Not Available"}
              </span>
            </li>
            <li className="flex items-center gap-4">
              <img src={iconTwitter} alt="" />
              <span
                className={`${data.twitter_username ? "text-neutral-500 dark:text-neutral-0" : "text-neutral-500/70 dark:text-neutral-0/70"}  font-normal leading-normal text-[0.9375rem]`}
              >
                {data.twitter_username ?? "Not Available"}
              </span>
            </li>
            <li className="flex items-center gap-4">
              <img src={iconWebsite} alt="" />
              <span
                className={`text-neutral-500/70 dark:text-neutral-0/70 font-normal leading-normal text-[0.9375rem]`}
              >
                {data.blog.length === 0 ? (
                  "Not Available"
                ) : (
                  <a
                    href={data.blog}
                    className="text-neutral-500 dark:text-neutral-0 hover:underline hover:decoration-1 hover:decoration-neutral-500 dark:hover:decoration-neutral-0 rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
                  >
                    {data.blog}
                  </a>
                )}
              </span>
            </li>
            <li className="flex items-center gap-4">
              <img src={iconCompany} alt="" />
              <span
                className={`${data.company ? "text-neutral-500 dark:text-neutral-0" : "text-neutral-500/70 dark:text-neutral-0/70"}  font-normal leading-normal text-[0.9375rem]`}
              >
                {data.company ?? "Not Available"}
              </span>
            </li>
          </ul>
        </div>
      </div>
    )
  );
};

export default UserProfile;
