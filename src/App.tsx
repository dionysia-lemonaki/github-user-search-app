import { useState } from "react";
import ThemeToggle from "./components/ThemeToggle";
import SearchBar from "./components/SearchBar";
import UserProfile from "./components/UserProfile";

const App = () => {
  const [input, setInput] = useState("");
  const [username, setUsername] = useState("octocat");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleSearch = () => {
    setUsername(input);
  };

  return (
    <div className="min-h-screen flex justify-center items-center p-4">
      <div className="max-w-182.5 w-full">
        <header className="flex justify-between">
          <p className="text-neutral-900 dark:text-neutral-0 font-bold text-[1.625rem] leading-none">
            devfinder
          </p>
          <ThemeToggle />
        </header>
        <main>
          <SearchBar
            input={input}
            onInputChange={handleInputChange}
            onSearch={handleSearch}
          />
          <UserProfile username={username} />
        </main>
      </div>
    </div>
  );
};

export default App;
