import React, { FormEvent } from 'react';

interface SearchBarProps {
    onSearch: () => Promise<void>;
    setQuery: React.Dispatch<React.SetStateAction<string>>;
    query: string; 
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch, setQuery, query }) => {
    const handleSubmit = (event: FormEvent) => {
      event.preventDefault(); // Evita el envío del formulario
      onSearch(); // Llama a la función de búsqueda
    };

    return (
        <div>
            <input 
                type="text" 
                value={query} 
                onChange={(e) => setQuery(e.target.value)} 
                placeholder="Buscar películas..."
            />
            <button onClick={onSearch}>Buscar</button>
        </div>
    );
};

export default SearchBar;
