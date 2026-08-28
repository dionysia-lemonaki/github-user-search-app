import { useState } from "react";
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
    <div>
      <SearchBar
        input={input}
        onInputChange={handleInputChange}
        onSearch={handleSearch}
      />
      <UserProfile username={username} />
    </div>
  );
};

export default App;
