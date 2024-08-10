import React from 'react';

interface SearchBarProps {
  onSearch: () => void;
  setQuery: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch, setQuery }) => {
  return (
    <div>
      <input 
        type="text" 
        onChange={(e) => setQuery(e.target.value)} 
        placeholder="Buscar película..." 
      />
      <button onClick={onSearch}>Buscar</button>
    </div>
  );
};

export default SearchBar;
