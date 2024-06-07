import { useState } from "react";
import Header from "../Header/Header";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
    const [email , setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleClick = (event) => {
        event.preventDefault();
        axios.post('/login', { email, password })
            .then(
                (response) => {
                    console.log(response);
                    localStorage.setItem('token', response.data.token);
                    navigate('/foro'); // Redirigir al foro después de iniciar sesión
                }
            )
            .catch(
                (error) => {
                    console.log(error);
                }
            )
    }

    return (
        <div className="bg-gradient-to-r from-blue-500 to-purple-500 min-h-screen">
            <Header />
            <div className="max-w-sm mx-auto pt-8">
                <h1 className="text-white text-center text-4xl font-semibold mb-4">Inicio de secion</h1>
                <form>
                    <div className="mb-5">
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tu correo</label>
                        <input type="email" id="email" value={email} onChange={(e)=>setEmail(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Ingrese su correo electronico" required />
                    </div>
                    <div className="mb-5">
                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tu contraseña</label>
                        <input type="password" id="password" value={password} onChange={(e)=>setPassword(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Ingrese su contraseña" required />
                    </div>
                    <div className="flex items-start mb-5">
                        <div className="flex items-center h-5">
                            <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
                        </div>
                        <label htmlFor="remember" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Recuérdame</label>
                    </div>
                    <button onClick={handleClick} type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Iniciar Sesión</button>
                </form>
                <p className='text-white text-center cursor-pointer hover:text-yellow-300'><a href="/register">¿Aún no tienes una cuenta?</a></p>
            </div>
        </div>
    );
}

export default Login;
