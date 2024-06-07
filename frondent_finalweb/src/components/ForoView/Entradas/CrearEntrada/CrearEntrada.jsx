import Header from "../../../Header/Header";
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CrearEntrada = () => {
    const navigate = useNavigate();
    const [titulo, setTitulo] = useState('');
    const [contenido, setContenido] = useState('');
    const [imagen, setImagen] = useState(null); // Estado para la imagen

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('titulo', titulo);
        formData.append('contenido', contenido);
        formData.append('images[]', imagen); // Agrega la imagen al formData

        try {
            await axios.post('/posts', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data', // Importante para enviar archivos
                },
            });
            console.log('Post creado correctamente');
            // Realiza alguna acción después de crear el post (por ejemplo, redirigir al usuario).
            navigate('/foro');
        } catch (error) {
            console.error('Error al crear el post:', error);
        }
    };

    return (
        <div className="bg-gray-100 min-h-screen">
            <Header />
            <div className="flex justify-center items-center py-10">
                <div className="bg-white p-8 rounded-lg shadow-md w-full sm:max-w-2xl">
                    <h1 className="text-2xl font-bold text-gray-800 mb-4">¡Crea una publicación!</h1>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="titulo">Nombre del perro</label>
                            <input
                                className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-indigo-500"
                                id="titulo"
                                type="text"
                                placeholder="Título"
                                value={titulo}
                                onChange={(e) => setTitulo(e.target.value)}
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="contenido">Contenido de la publicación</label>
                            <textarea
                                className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-indigo-500"
                                id="contenido"
                                placeholder="Contenido"
                                value={contenido}
                                onChange={(e) => setContenido(e.target.value)}
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="imagen">Agrega una imagen del perro</label>
                            <input
                                id="imagen"
                                type="file"
                                accept="image/*"
                                onChange={(e) => setImagen(e.target.files[0])}
                            />
                        </div>
                        <div className="flex justify-end">
                            <button type="submit" className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                                Crear
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default CrearEntrada;
