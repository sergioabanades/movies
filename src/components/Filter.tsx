import React from 'react';

interface FilterProps {
  setFilter: (filter: string) => void;
}

const Filter: React.FC<FilterProps> = ({ setFilter }) => {
  return (
    <div>
      <select onChange={(e) => setFilter(e.target.value)}>
        <option value="">Todos</option>
        <option value="action">Acción</option>
        <option value="comedy">Comedia</option>
      </select>
    </div>
  );
};

export default Filter;
