import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Entrada from "./Entrada/Entrada";

const Entradas = () => {
    const navigate = useNavigate();
    const [entradas, setEntradas] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const entriesPerPage = 8;

    const crearHilo = () => {
        navigate('/crear-entrada');
    }

    useEffect(() => {
        axios.get('/posts')
            .then(response => {
                setEntradas(response.data);
            })
            .catch(error => {
                console.error('Error al obtener las entradas:', error);
            });
    }, []);

    const indexOfLastEntry = currentPage * entriesPerPage;
    const indexOfFirstEntry = indexOfLastEntry - entriesPerPage;
    const entriesToShow = entradas.slice(indexOfFirstEntry, indexOfLastEntry);

    const goToPrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const goToNextPage = () => {
        if (indexOfLastEntry < entradas.length) {
            setCurrentPage(currentPage + 1);
        }
    };

    function formatDate(dateString) {
        const date = new Date(dateString);
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();
        return `${day}/${month}/${year}`;
    }

    const truncateContent = (content) => {
        const MAX_CONTENT_LENGTH = 160;
        if (content.length <= MAX_CONTENT_LENGTH) {
            return content;
        } else {
            const truncatedContent = content.substring(0, MAX_CONTENT_LENGTH).trim();
            return `${truncatedContent}...`;
        }
    }

    const handleDelete = (id) => {
        setEntradas(entradas.filter(entrada => entrada.id !== id));
    };

    return (
        <div className="bg-white p-8 rounded-md w-full shadow-md">
            <div className="flex items-center justify-between pb-6">
                <div>
                    <h2 className="text-gray-800 font-semibold">¡Bienvenido!</h2>
                    <span className="text-sm text-gray-600">Aquí puedes hacer la publicación</span>
                </div>
                <div className="flex items-center">
    <div className="ml-8">
        <button onClick={crearHilo} className="bg-black px-4 py-2 rounded-md text-white font-semibold">Crear Publicación</button>
    </div>
</div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {
                    entriesToShow.map(entrada => (
                        <Entrada
                            key={entrada.id}
                            titulo={entrada.titulo}
                            autor={entrada.user.name}
                            creacion={formatDate(entrada.created_at)}
                            contenido={truncateContent(entrada.contenido)}
                            id={entrada.id}
                            onDelete={handleDelete}
                        />
                    ))
                }
            </div>
            <div className="flex justify-between mt-4">
            <button onClick={goToPrevPage} className="bg-black px-4 py-2 text-white rounded">Anterior</button>
            <button onClick={goToNextPage} className="bg-black px-4 py-2 text-white rounded">Siguiente</button>
            </div>
        </div>
    );
}

export default Entradas;
