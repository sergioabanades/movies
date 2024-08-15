import React, { FormEvent } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';

interface SearchBarProps {
    onSearch: () => Promise<void>;
    setQuery: React.Dispatch<React.SetStateAction<string>>;
    query: string; 
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch, setQuery, query }) => {
    const handleSubmit = (event: FormEvent) => {
      event.preventDefault(); 
      onSearch(); 
    };

    return (
        <>
            <input 
                type="text" 
                value={query} 
                onChange={(e) => setQuery(e.target.value)} 
                placeholder="Buscar películas..."
                className="search-input"
            />
            <IconButton type="submit" onClick={onSearch}  className="search-button">
              <SearchIcon />
            </IconButton>
        </>
    );
};

export default SearchBar;
