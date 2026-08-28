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
    <form onSubmit={handleSubmit}>
      <img src={iconSearch} alt="" width="24" height="24" />
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
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBar;
