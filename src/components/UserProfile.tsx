import { useGithubUser } from "../hooks/useGithubUser";
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
    return <p>{error.message}</p>;
  }

  return (
    data && (
      <div>
        <img src={data.avatar_url} alt="" width="117" height="117" />
        <div>
          <h1>{data.name ?? "Not Available"}</h1>
          <p>@{data.login}</p>
          <p>Joined {formatDate(data.created_at)}</p>
          <p>{data.bio ?? "This profile has no bio"}</p>
          <ul>
            <li>
              <span>Repos</span>
              <span>{data.public_repos}</span>
            </li>
            <li>
              <span>Followers</span>
              <span>{data.followers}</span>
            </li>
            <li>
              <span>Following</span>
              <span>{data.following}</span>
            </li>
          </ul>
          <ul>
            <li>
              <img src={iconLocation} alt="" />
              <span>{data.location ?? "Not Available"}</span>
            </li>
            <li>
              <img src={iconTwitter} alt="" />
              <span>{data.twitter_username ?? "Not Available"}</span>
            </li>
            <li>
              <img src={iconWebsite} alt="" />
              <span>
                {data.blog.length === 0 ? "Not Available" : data.blog}
              </span>
            </li>
            <li>
              <img src={iconCompany} alt="" />
              <span>{data.company ?? "Not Available"}</span>
            </li>
          </ul>
        </div>
      </div>
    )
  );
};

export default UserProfile;
