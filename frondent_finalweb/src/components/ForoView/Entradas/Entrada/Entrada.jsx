import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Entrada = ({ id, titulo, autor, creacion, contenido, imagenUrl, onDelete }) => {
    const navigate = useNavigate();

    const verHilo = () => {
        navigate(`/foro/${id}`);
    };

    const eliminarHilo = async () => {
        try {
            await axios.delete(`/posts/${id}`);
            onDelete(id); // Llama a la función de callback para actualizar la lista
        } catch (error) {
            console.error('Error al eliminar el hilo:', error);
        }
    };

    return (
        <div className="bg-white rounded-lg shadow-md p-4 mb-4">
            <div className="flex items-center justify-between">
                <div className="flex items-center">
                    <img className="w-10 h-10 rounded-full mr-4" src={imagenUrl} alt={autor} />
                    <div>
                        <p className="font-semibold">{autor}</p>
                        <p className="text-gray-600 text-sm">{creacion}</p>
                    </div>
                </div>
                <button onClick={eliminarHilo} className="text-red-500 font-semibold">Eliminar</button>
            </div>
            <div className="mt-4">
                <h2 className="text-xl font-bold">{titulo}</h2>
                <p className="mt-2 text-gray-700">{contenido}</p>
            </div>
            <div className="mt-4 flex justify-between">
                <button onClick={verHilo} className="text-blue-500 font-semibold">Ver publicacion</button>
            </div>
        </div>
    );
}

export default Entrada;
