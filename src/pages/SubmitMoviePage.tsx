import React, { useState } from 'react';

const SubmitMoviePage: React.FC = () => {
  const [title, setTitle] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Película "${title}" enviada!`);
    setTitle('');
  };

  return (
    <div>
      <h2>Añadir Película</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          value={title} 
          onChange={(e) => setTitle(e.target.value)} 
          placeholder="Título de la película" 
          required 
        />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default SubmitMoviePage;
