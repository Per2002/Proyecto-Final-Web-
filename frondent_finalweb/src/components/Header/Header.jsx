import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DropDownMenu from './DropDownMenu/DropDownMenu';

const Header = (props) => {
    const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            setIsLoggedIn(true);
        }
    }, []);

    const manejarCuenta = (event) => {
        navigate('/'); // Aquí puedes cambiar a la ruta deseada
    }

    const iniciarSesion = (event) => {
        if (isLoggedIn) {
            // Si está autenticado, cerrar sesión
            localStorage.removeItem('token');
            setIsLoggedIn(false);
        } else {
            // Si no está autenticado, redirigir a la página de inicio de sesión
            navigate('/login');
        }
    }
    
    return (
        <nav className="bg-cover bg-center h-64" style={{ backgroundImage: "url('https://thumbs.dreamstime.com/z/un-amante-de-los-dulces-perro-que-rompe-el-coraz%C3%B3n-jack-russell-terrier-comiendo-rojo-forma-caramelo-langosta-fondo-amarillo-184490103.jpg?ct=jpeg')" }}>
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto py-6 px-4 h-full">
                <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src="https://images.ctfassets.net/1sv59kqumaqp/2ADoT6m1c84hnTZ2VD4YH/20441d8d6daec03e22ee5ceab2fb683f/mascotas_header__1_.svg" className="h-20" alt="Flowbite Logo" />
                    <span className="self-center text-3xl font-semibold whitespace-nowrap text-white">LifMascot</span>
                </a>
                <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                <button 
    onClick={iniciarSesion} 
    type="button" 
    className={`text-white bg-black hover:bg-white hover:text-black focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800`}
>
    {isLoggedIn ? 'Cerrar Sesión' : 'Iniciar Sesión'}
</button>


                   
                </div>
                <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
                    <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-white md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
                        <li>
                            <a href="/" className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-white dark:text-white dark:hover:bg-gray-700 md:dark:hover:bg-transparent">Inicio</a>
                        </li>
                        <li>
                            <a href="/foro" className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-white dark:text-white dark:hover:bg-gray-700 md:dark:hover:bg-transparent">Publicaciones</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Header;
