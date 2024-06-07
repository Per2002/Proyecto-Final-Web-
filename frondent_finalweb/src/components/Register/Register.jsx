import { useState } from "react";
import Header from "../Header/Header";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Register = () => {
    const [name, setName] = useState('');
    const [email , setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [registrationSuccess, setRegistrationSuccess] = useState(false); // Nuevo estado para el mensaje de registro exitoso
    const navigate = useNavigate();

    const handleClick = (event) => {
        event.preventDefault();
        axios.post('/register', { name, email, password })
            .then(
                (response) => {
                    console.log(response);
                    localStorage.setItem('token', response.data.token);
                    setRegistrationSuccess(true); // Establecer el estado a verdadero después de un registro exitoso
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
            <div className="max-w-md mx-auto pt-8">
                <h1 className="text-white text-center text-4xl font-semibold mb-4">¡Regístrate!</h1>
                {registrationSuccess && ( // Mostrar el mensaje de registro exitoso si registrationSuccess es true
                    <p className="text-green-500 text-center mb-4">¡Te has registrado exitosamente!</p>
                )}
                <form>
                    <div className="relative mb-5 group">
                        <input type="text" name="name" value={name} onChange={(e)=>setName(e.target.value)} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none text-white focus:outline-none focus:border-blue-600" placeholder="Nombre" required />
                    </div>
                    <div className="relative mb-5 group">
                        <input type="email" name="email" value={email} onChange={(e)=>setEmail(e.target.value)} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none text-white focus:outline-none focus:border-blue-600" placeholder="Correo Electrónico" required />
                    </div>
                    <div className="relative mb-5 group">
                        <input type="password" name="password" value={password} onChange={(e)=>setPassword(e.target.value)} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none text-white focus:outline-none focus:border-blue-600" placeholder="Contraseña" required />
                    </div>
                    <button onClick={handleClick} type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Registrarse</button>
                </form>
            </div>
        </div>
    );
}

export default Register;
