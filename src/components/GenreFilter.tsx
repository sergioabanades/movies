import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface Genre {
    id: number;
    name: string;
}

const API_KEY = '0eca087dc00a8d46e2179d780d4ada5a';

const GenreFilter: React.FC<{ onGenreChange: (genreId: number) => void }> = ({ onGenreChange }) => {
    const [genres, setGenres] = useState<Genre[]>([]); // Usa la interfaz para tipar el estado

    useEffect(() => {
        const fetchGenres = async () => {
            try {
                const response = await axios.get(`https://api.themoviedb.org/3/genre/movie/list`, {
                    params: {
                        api_key: API_KEY,
                        language: 'es-ES', 
                    },
                });
                setGenres(response.data.genres);
            } catch (error) {
                console.error('Error fetching genres:', error);
            }
        };

        fetchGenres();
    }, []);

    return (
        <select onChange={(e) => onGenreChange(Number(e.target.value))}>
            <option value="">Todos los Géneros</option>
            {genres.map((genre) => (
                <option key={genre.id} value={genre.id}>
                    {genre.name}
                </option>
            ))}
        </select>
    );
};

export default GenreFilter;
