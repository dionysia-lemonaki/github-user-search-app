import { useId } from "react";
import iconSearch from "../assets/images/icon-search.svg";

interface SearchBarProps {
  input: string;
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSearch: () => void;
}

const SearchBar = ({ input, onInputChange, onSearch }: SearchBarProps) => {
  const id = useId();

  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSearch();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-8 md:mt-10 bg-neutral-0 dark:bg-neutral-800 rounded-2xl px-3 py-2 md:pl-6 grid grid-cols-[auto_1fr_auto]"
    >
      <img
        src={iconSearch}
        alt=""
        width="20"
        height="20"
        className="self-center"
      />
      <label htmlFor={id} className="sr-only">
        Enter GitHub username
      </label>
      <input
        id={id}
        type="text"
        placeholder="Search GitHub username…"
        value={input}
        onChange={onInputChange}
        required
        className="ml-2 md:ml-5 placeholder:text-neutral-500 dark:placeholder:text-neutral-0/70 placeholder:font-normal placeholder:text-[0.8125rem] md:placeholder:text-lg placeholder:leading-[1.4] text-neutral-700 dark:text-neutral-0 rounded-sm focus-visible:outline-2 focus-visible:outline-blue-500"
      />
      <button
        type="submit"
        className="bg-blue-500 py-3 px-5 md:px-6 rounded-[10px] cursor-pointer text-base font-bold leading-normal text-neutral-0 hover:bg-blue-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-500"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;
