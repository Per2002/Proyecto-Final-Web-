import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const PiePagina = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto text-center">
        <p className="text-lg mb-4">Síguenos en nuestras redes sociales</p>
        <div className="flex justify-center space-x-6 mb-6">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
            <FaFacebook size={30} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
            <FaTwitter size={30} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
            <FaInstagram size={30} />
          </a>
        </div>
        <div>
          <a href="/contacto" className="text-gray-400 hover:text-white">
            Contáctanos
          </a>
        </div>
      </div>
    </footer>
  );
};

export default PiePagina;
