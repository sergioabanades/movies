import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { API_KEY } from '../configs/config';

interface Genre {
    id: number;
    name: string;
}

interface GenreFilterProps {
    onGenreChange: (genreId: number) => void;
    selectedGenre: string; // Agrega selectedGenre aquí
}

const GenreFilter: React.FC<GenreFilterProps> = ({ onGenreChange, selectedGenre }) => {
    const [genres, setGenres] = useState<Genre[]>([]);

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
                console.error('Error mostrando géneros:', error);
            }
        };

        fetchGenres();
    }, []);

    return (
        <select onChange={(e) => onGenreChange(Number(e.target.value))} value={selectedGenre}>
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
