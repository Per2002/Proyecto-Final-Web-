import { useParams } from 'react-router-dom';
import Header from '../../../Header/Header';
import Post from './Post/Post';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const EntradaView = () => {
    const { id } = useParams();
    const [datos, setDatos] = useState([]);

    useEffect(() => {
        axios.get(`/posts/${id}`)
            .then(response => {
                setDatos(response.data);
            })
            .catch(error => {
                console.error('Error al obtener los datos:', error);
            });
    }, []);

    return (
        <div>
            <Header />
            <div className="p-8">
                <Post 
                    titulo={datos.titulo}
                    contenido={datos.contenido}
                    nombre={datos.user && datos.user.name}
                    creacion={datos.created_at}
                />
               
            </div>
        </div>
    );
}

export default EntradaView;
