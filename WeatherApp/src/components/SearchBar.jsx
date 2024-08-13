import React, { useState, useEffect, useRef } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FaSearch } from "react-icons/fa";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-full items-center space-x-2"
    >
      <Input
        type="text"
        placeholder="Search for a city..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="bg-white bg-opacity-20 border-0 placeholder-gray-300 text-white focus:ring-2 focus:ring-white"
        ref={inputRef}
      />
      <Button
        type="submit"
        className="bg-white bg-opacity-20 hover:bg-opacity-30 text-white"
      >
        <FaSearch />
      </Button>
    </form>
  );
};

export default SearchBar;
